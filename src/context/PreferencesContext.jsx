import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { translations, LANGUAGES } from '../i18n/translations';

const PreferencesContext = createContext(null);

const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getInitialLang = () => {
    if (typeof window === 'undefined') return 'en';
    const stored = localStorage.getItem('lang');
    return LANGUAGES.some((l) => l.code === stored) ? stored : 'en';
};

export const PreferencesProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme);
    const [lang, setLang] = useState(getInitialLang);

    // Apply theme to the <html> element and persist it.
    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', theme === 'dark');
        root.style.colorScheme = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Apply language + direction to the <html> element and persist it.
    useEffect(() => {
        const root = document.documentElement;
        const meta = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];
        root.setAttribute('lang', lang);
        root.setAttribute('dir', meta.dir);
        localStorage.setItem('lang', lang);
    }, [lang]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    const t = useCallback(
        (key) => translations[lang]?.[key] ?? translations.en[key] ?? key,
        [lang]
    );

    const dir = LANGUAGES.find((l) => l.code === lang)?.dir ?? 'ltr';

    const value = { theme, setTheme, toggleTheme, lang, setLang, dir, t, languages: LANGUAGES };

    return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
};

export const usePreferences = () => {
    const ctx = useContext(PreferencesContext);
    if (!ctx) throw new Error('usePreferences must be used within a PreferencesProvider');
    return ctx;
};
