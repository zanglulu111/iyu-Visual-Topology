
import { HistoryItem, CollectionItem } from '../types';
import { supabaseDatabase } from './supabaseDatabase';
import { supabase } from './supabaseAuth';

const DB_NAME = 'VisionaryDB';
const DB_VERSION = 1;
const STORE_HISTORY = 'history';
const STORE_COLLECTIONS = 'collections';

let lastCloudFetchTime = 0;
const CLOUD_FETCH_COOLDOWN = 60000; // 60 seconds cooldown

// Helper to open DB
const openDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(STORE_HISTORY)) {
                db.createObjectStore(STORE_HISTORY, { keyPath: 'id' });
            }
            if (!db.objectStoreNames.contains(STORE_COLLECTIONS)) {
                db.createObjectStore(STORE_COLLECTIONS, { keyPath: 'id' });
            }
        };

        request.onsuccess = (event) => {
            resolve((event.target as IDBOpenDBRequest).result);
        };

        request.onerror = (event) => {
            reject((event.target as IDBOpenDBRequest).error);
        };
    });
};

export const persistence = {
    // Initialize DB (optional, can just call methods)
    init: async () => {
        try {
            await openDB();
            console.log("VisionaryDB Initialized");
        } catch (e) {
            console.error("Failed to init DB", e);
        }
    },

    // --- HISTORY OPERATIONS ---

    // Load all history items, sorted by date descending
    getHistory: async (): Promise<HistoryItem[]> => {
        // Fetch local first
        const db = await openDB();
        const localItems = await new Promise<HistoryItem[]>((resolve, reject) => {
            const transaction = db.transaction(STORE_HISTORY, 'readonly');
            const store = transaction.objectStore(STORE_HISTORY);
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result as HistoryItem[]);
            request.onerror = () => reject(request.error);
        });

        // Try Cloud
        const { data: user } = await supabase.auth.getUser();
        if (user.user) {
            const now = Date.now();
            if (now - lastCloudFetchTime < CLOUD_FETCH_COOLDOWN && localItems.length > 0) {
                console.log("Using cached history (cooldown active)");
            } else {
                try {
                    const cloudHistory = await supabaseDatabase.getCloudHistory();
                    lastCloudFetchTime = now;
                    if (cloudHistory && cloudHistory.length > 0) {
                        // MERGE: Combine local and cloud, filter duplicates by ID
                        const idMap = new Map();
                        localItems.forEach(item => idMap.set(String(item.id), item));
                        cloudHistory.forEach(item => idMap.set(String(item.id), item));

                        const merged = Array.from(idMap.values());
                        merged.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                        return merged;
                    }
                } catch (err) {
                    console.warn("Could not fetch cloud history, using local.", err);
                }
            }
        }

        // Sort and return local if no cloud or cloud fetch failed
        localItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        return localItems;
    },


    // Save a single history item (Update or Insert)
    saveHistoryItem: async (item: HistoryItem) => {
        // Try to save to cloud if logged in
        const { data: user } = await supabase.auth.getUser();
        if (user.user) {
            try {
                await supabaseDatabase.saveCloudHistoryItem(item);
            } catch (err) {
                console.error("Failed to sync history item to cloud", err);
            }
        }

        // Always save locally as well
        const db = await openDB();
        return new Promise<void>((resolve, reject) => {
            const transaction = db.transaction(STORE_HISTORY, 'readwrite');
            const store = transaction.objectStore(STORE_HISTORY);
            const request = store.put(item);

            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    },

    // Sync entire history array (Use carefully, mainly for migration or bulk updates)
    // For performance, we usually prefer saveHistoryItem, but to keep app logic simple we might sync.
    // Optimization: We will only save the top item if we assume it's an append, 
    // BUT for safety in this specific "no-backend" app, we can overwrite.
    // However, writing 100 items with images every keystroke is bad. 
    // The App.tsx currently saves on change. We should optimize App.tsx to only save when adding.
    // For now, let's provide a bulk save that clears and rewrites (Robust but heavy).
    // BETTER STRATEGY: The App handles state. We just need to persist. 
    // We will provide a method to "Ensure" the list matches.
    // Actually, IndexedDB is fast. Let's just PUT all items in the list.
    saveFullHistory: async (items: HistoryItem[]) => {
        const db = await openDB();
        return new Promise<void>((resolve, reject) => {
            const transaction = db.transaction(STORE_HISTORY, 'readwrite');
            const store = transaction.objectStore(STORE_HISTORY);

            // Clear old (optional, but ensures deleted items are gone)
            store.clear().onsuccess = () => {
                let completed = 0;
                if (items.length === 0) {
                    resolve();
                    return;
                }

                // Limit history size to prevent DB explosion (e.g., keep last 50 items)
                const itemsToSave = items.slice(0, 50);

                itemsToSave.forEach(item => {
                    store.put(item).onsuccess = () => {
                        completed++;
                        if (completed === itemsToSave.length) resolve();
                    };
                });
            };

            transaction.onerror = () => reject(transaction.error);
        });
    },

    clearHistory: async () => {
        // Try to clear cloud history
        const { data: user } = await supabase.auth.getUser();
        if (user.user) {
            try {
                await supabaseDatabase.clearCloudHistory();
            } catch (err) {
                console.error("Failed to clear cloud history", err);
            }
        }

        const db = await openDB();
        return new Promise<void>((resolve, reject) => {
            const transaction = db.transaction(STORE_HISTORY, 'readwrite');
            const store = transaction.objectStore(STORE_HISTORY);
            store.clear();
            transaction.oncomplete = () => resolve();
            transaction.onerror = () => reject(transaction.error);
        });
    },

    // --- COLLECTION OPERATIONS ---

    getCollections: async (): Promise<CollectionItem[]> => {
        // Fetch local
        const db = await openDB();
        const localItems = await new Promise<CollectionItem[]>((resolve, reject) => {
            const transaction = db.transaction(STORE_COLLECTIONS, 'readonly');
            const store = transaction.objectStore(STORE_COLLECTIONS);
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result as CollectionItem[]);
            request.onerror = () => reject(request.error);
        });

        // Try Cloud
        const { data: user } = await supabase.auth.getUser();
        if (user.user) {
            try {
                const cloudCollections = await supabaseDatabase.getCloudCollections();
                if (cloudCollections && cloudCollections.length > 0) {
                    const idMap = new Map();
                    localItems.forEach(item => idMap.set(item.id, item));
                    cloudCollections.forEach(item => idMap.set(item.id, item));

                    const merged = Array.from(idMap.values());
                    merged.sort((a, b) => new Date(b.saveDate).getTime() - new Date(a.saveDate).getTime());
                    return merged;
                }
            } catch (err) {
                console.warn("Could not fetch cloud collections, using local.", err);
            }
        }

        localItems.sort((a, b) => new Date(b.saveDate).getTime() - new Date(a.saveDate).getTime());
        return localItems;
    },


    saveCollectionItem: async (item: CollectionItem) => {
        // Sync to cloud if logged in
        const { data: user } = await supabase.auth.getUser();
        if (user.user) {
            try {
                await supabaseDatabase.saveCloudCollectionItem(item);
            } catch (err) {
                console.error("Failed to sync collection item to cloud", err);
            }
        }

        const db = await openDB();
        return new Promise<void>((resolve, reject) => {
            const transaction = db.transaction(STORE_COLLECTIONS, 'readwrite');
            const store = transaction.objectStore(STORE_COLLECTIONS);
            const request = store.put(item);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    },


    deleteCollectionItem: async (id: string) => {
        // Sync removal to cloud if logged in
        const { data: user } = await supabase.auth.getUser();
        if (user.user) {
            try {
                await supabaseDatabase.deleteCloudCollectionItem(id);
            } catch (err) {
                console.error("Failed to sync collection deletion to cloud", err);
            }
        }

        const db = await openDB();
        return new Promise<void>((resolve, reject) => {
            const transaction = db.transaction(STORE_COLLECTIONS, 'readwrite');
            const store = transaction.objectStore(STORE_COLLECTIONS);
            const request = store.delete(id);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    },

    syncLocalToCloud: async () => {
        const { data: user } = await supabase.auth.getUser();
        if (!user.user) throw new Error("User not logged in");

        // 1. Get truly local history (from IndexedDB only, not the merged one)
        const db = await openDB();
        const localHistory = await new Promise<HistoryItem[]>((resolve, reject) => {
            const transaction = db.transaction(STORE_HISTORY, 'readonly');
            const store = transaction.objectStore(STORE_HISTORY);
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result as HistoryItem[]);
            request.onerror = () => reject(request.error);
        });

        // 2. Get local collections
        const localCollections = await new Promise<CollectionItem[]>((resolve, reject) => {
            const transaction = db.transaction(STORE_COLLECTIONS, 'readonly');
            const store = transaction.objectStore(STORE_COLLECTIONS);
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result as CollectionItem[]);
            request.onerror = () => reject(request.error);
        });

        // 3. Push to cloud
        console.log(`Syncing ${localHistory.length} history items and ${localCollections.length} collections...`);

        for (const item of localHistory) {
            try { await supabaseDatabase.saveCloudHistoryItem(item); } catch (e) { console.error("Sync history failed", e); }
        }
        for (const item of localCollections) {
            try { await supabaseDatabase.saveCloudCollectionItem(item); } catch (e) { console.error("Sync collection failed", e); }
        }

        return { historySynced: localHistory.length, collectionsSynced: localCollections.length };
    }
};
