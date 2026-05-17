import React, {
    createContext,
    startTransition,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react';

type Theme = 'dark' | 'retro';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const THEME_SWITCH_CLASS = 'mist-theme-switching';
const THEME_SWITCH_WINDOW_MS = 360;

let themeSwitchTimer: number | undefined;
let themeStateTimer: number | undefined;

const isTheme = (value: string | null): value is Theme => value === 'dark' || value === 'retro';

const getInitialTheme = (): Theme => {
    if (typeof window === 'undefined') return 'dark';
    const savedTheme = window.localStorage.getItem('app_theme');
    return isTheme(savedTheme) ? savedTheme : 'dark';
};

const markThemeSwitching = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    document.documentElement.classList.add(THEME_SWITCH_CLASS);
    document.body.classList.add(THEME_SWITCH_CLASS);

    window.clearTimeout(themeSwitchTimer);
    themeSwitchTimer = window.setTimeout(() => {
        document.documentElement.classList.remove(THEME_SWITCH_CLASS);
        document.body.classList.remove(THEME_SWITCH_CLASS);
    }, THEME_SWITCH_WINDOW_MS);
};

const applyThemeClass = (newTheme: Theme, switching = false) => {
    if (typeof document === 'undefined') return;

    if (switching) markThemeSwitching();

    const root = document.documentElement;
    const body = document.body;

    root.classList.remove('dark', 'retro');
    root.classList.add(newTheme);
    root.dataset.theme = newTheme;
    root.style.colorScheme = newTheme === 'retro' ? 'light' : 'dark';

    body.classList.remove('dark', 'retro');
    body.classList.add(newTheme);
    body.dataset.theme = newTheme;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setThemeState] = useState<Theme>(getInitialTheme);
    const themeRef = useRef(theme);

    const setTheme = useCallback((newTheme: Theme) => {
        if (newTheme === themeRef.current) {
            applyThemeClass(newTheme);
            return;
        }

        themeRef.current = newTheme;
        window.localStorage.setItem('app_theme', newTheme);
        applyThemeClass(newTheme, true);

        window.clearTimeout(themeStateTimer);
        themeStateTimer = window.setTimeout(() => {
            startTransition(() => setThemeState(newTheme));
        }, 64);
    }, []);

    const toggleTheme = useCallback(() => {
        const newTheme = themeRef.current === 'dark' ? 'retro' : 'dark';
        setTheme(newTheme);
    }, [setTheme]);

    // Apply the saved theme once on initial load. Later switches are applied
    // synchronously in setTheme to avoid a second full document style pass.
    useEffect(() => {
        themeRef.current = theme;
        applyThemeClass(theme);
        return () => {
            window.clearTimeout(themeSwitchTimer);
            window.clearTimeout(themeStateTimer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme]);

    return (
        <ThemeContext.Provider value={value}>
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
