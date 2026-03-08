import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'dark' | 'retro';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setThemeState] = useState<Theme>('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('app_theme') as Theme;
        if (savedTheme && (savedTheme === 'dark' || savedTheme === 'retro')) {
            setThemeState(savedTheme);
        }
    }, []);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem('app_theme', newTheme);
        // We can also apply a class to the html/body if needed for tailwind 'class' strategy
        document.documentElement.classList.remove('dark', 'retro');
        document.documentElement.classList.add(newTheme);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'retro' : 'dark';
        setTheme(newTheme);
    };

    // Apply theme on initial load
    useEffect(() => {
        document.documentElement.classList.remove('dark', 'retro');
        document.documentElement.classList.add(theme);
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
