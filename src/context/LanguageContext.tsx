"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('es');

    // Load translations
    // In a real app, this might be dynamic, but for now we'll import the object directly in the components
    // or pass a translation function. 
    // To keep it simple and type-safe, we will actually just expose the language state 
    // and let components import the dictionary. 
    // OR better: we implement a simple 't' function here if we pass the dictionary.

    // Let's go with a simple state provider for now, and a hook that returns the dictionary.

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: (key) => key }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
