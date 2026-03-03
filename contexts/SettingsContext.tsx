import React, { createContext, useContext, useState, useEffect } from 'react';
import { APISettings } from '../types';

interface SettingsContextType {
    settings: APISettings;
    updateSettings: (newSettings: APISettings) => void;
    isOpen: boolean;
    openSettings: () => void;
    closeSettings: () => void;
}

const defaultSettings: APISettings = {
    llm: {
        provider: 'google',
        model: 'gemini-3-pro-preview',
        apiKey: '',
        baseUrl: ''
    },
    image: {
        provider: 'google',
        model: 'gemini-3-pro-image-preview',
        apiKey: '',
        baseUrl: '',
        protocol: 'gemini-native'
    }
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [settings, setSettings] = useState<APISettings>(defaultSettings);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('api_settings');
        if (saved) {
            try {
                setSettings(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse settings", e);
            }
        }
    }, []);

    const updateSettings = (newSettings: APISettings) => {
        setSettings(newSettings);
        localStorage.setItem('api_settings', JSON.stringify(newSettings));
    };

    const openSettings = () => setIsOpen(true);
    const closeSettings = () => setIsOpen(false);

    return (
        <SettingsContext.Provider value={{ settings, updateSettings, isOpen, openSettings, closeSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};
