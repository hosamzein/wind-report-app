import React, { createContext, useState, useEffect, useContext } from 'react';

export const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }) {
    // Default to Arabic
    const [language, setLanguage] = useState('ar');

    useEffect(() => {
        // Update HTML dir and lang attributes for RTL/LTR support
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => (prev === 'en' ? 'ar' : 'en'));
    };

    const toArabicNumerals = (num) => {
        if (language !== 'ar') return num;
        const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        return String(num).replace(/[0-9]/g, w => arabicNumbers[+w]);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, toArabicNumerals }}>
            {children}
        </LanguageContext.Provider>
    );
}
