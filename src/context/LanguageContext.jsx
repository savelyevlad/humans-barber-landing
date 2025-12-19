import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check localStorage
    const saved = localStorage.getItem('language');
    if (saved) return saved;

    // Check browser preference
    const browserLang = navigator.language.split('-')[0]; // 'pl', 'ru', 'en'
    if (browserLang === 'pl' || browserLang === 'ru') {
      return browserLang;
    }

    // Default to 'pl' if neither match
    return 'pl';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
