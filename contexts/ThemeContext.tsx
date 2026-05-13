import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'dark' | 'retro';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const isTheme = (value: string | null): value is Theme => value === 'dark' || value === 'retro';

const getInitialTheme = (): Theme => {
    if (typeof window === 'undefined') return 'dark';
    const savedTheme = window.localStorage.getItem('app_theme');
    return isTheme(savedTheme) ? savedTheme : 'dark';
};

const applyThemeClass = (newTheme: Theme) => {
    document.documentElement.classList.remove('dark', 'retro');
    document.documentElement.classList.add(newTheme);
    document.documentElement.dataset.theme = newTheme;
    document.body.classList.remove('dark', 'retro');
    document.body.classList.add(newTheme);
    document.body.dataset.theme = newTheme;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setThemeState] = useState<Theme>(getInitialTheme);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem('app_theme', newTheme);
        applyThemeClass(newTheme);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'retro' : 'dark';
        setTheme(newTheme);
    };

    // Apply theme on initial load
    useEffect(() => {
        applyThemeClass(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
