import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Globe, Check } from 'lucide-react';
import { usePreferences } from '../context/PreferencesContext';

const AccessibilityControls = () => {
    const { theme, toggleTheme, lang, setLang, languages, t } = usePreferences();
    const [langOpen, setLangOpen] = useState(false);
    const wrapperRef = useRef(null);

    // Close the language popover when clicking outside or pressing Escape.
    useEffect(() => {
        if (!langOpen) return;
        const handlePointer = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setLangOpen(false);
        };
        const handleKey = (e) => e.key === 'Escape' && setLangOpen(false);
        document.addEventListener('mousedown', handlePointer);
        document.addEventListener('keydown', handleKey);
        return () => {
            document.removeEventListener('mousedown', handlePointer);
            document.removeEventListener('keydown', handleKey);
        };
    }, [langOpen]);

    const isDark = theme === 'dark';
    const currentLang = languages.find((l) => l.code === lang) ?? languages[0];

    return (
        <div
            ref={wrapperRef}
            dir="ltr"
            className="fixed top-4 right-4 z-50 flex items-center gap-1.5 bg-white/90 backdrop-blur border border-black/10 shadow-lg rounded-full p-1"
        >
            {/* Dark / light toggle */}
            <button
                onClick={toggleTheme}
                aria-label={isDark ? t('a11y.light') : t('a11y.dark')}
                title={isDark ? t('a11y.light') : t('a11y.dark')}
                className="w-9 h-9 flex items-center justify-center rounded-full text-black hover:bg-black/5 transition-colors active:scale-90"
            >
                {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
            </button>

            <span className="w-px h-5 bg-black/10" aria-hidden="true" />

            {/* Language selector */}
            <div className="relative">
                <button
                    onClick={() => setLangOpen((o) => !o)}
                    aria-label={t('a11y.language')}
                    aria-haspopup="listbox"
                    aria-expanded={langOpen}
                    title={t('a11y.language')}
                    className="h-9 pl-2.5 pr-3 flex items-center gap-1.5 rounded-full text-black hover:bg-black/5 transition-colors active:scale-95"
                >
                    <Globe className="w-[18px] h-[18px]" />
                    <span className="text-[13px] font-bold">{currentLang.label}</span>
                </button>

                {langOpen && (
                    <ul
                        role="listbox"
                        className="absolute right-0 mt-2 w-28 bg-white border border-black/10 shadow-xl rounded-2xl p-1.5 overflow-hidden"
                    >
                        {languages.map((l) => {
                            const active = l.code === lang;
                            return (
                                <li key={l.code} role="option" aria-selected={active}>
                                    <button
                                        onClick={() => {
                                            setLang(l.code);
                                            setLangOpen(false);
                                        }}
                                        className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-[13px] font-bold transition-colors ${
                                            active ? 'bg-black text-white' : 'text-black hover:bg-black/5'
                                        }`}
                                    >
                                        <span className="font-black tracking-wide">{l.label}</span>
                                        {active && <Check className="w-4 h-4" />}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default AccessibilityControls;
