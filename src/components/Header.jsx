import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'ru' : 'pl');
  };

  const cycleTheme = () => {
    toggleTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header id="global-header" className="code-section bg-white dark:bg-gray-900 border-b border-[var(--light-border-color)] dark:border-gray-700 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 transition-transform hover:scale-105 duration-300">
            <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/9c7e845f-73cb-4ba7-bc98-be53686c4000/publicContain" alt="Humans Barber School" className="h-20 py-2" data-logo="" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-[var(--dark-text-color)] hover:text-[var(--primary-color)] transition-colors duration-300 font-medium">{t('gallery')}</a>
            <a href="#courses" className="text-[var(--dark-text-color)] hover:text-[var(--primary-color)] transition-colors duration-300 font-medium">{t('courses')}</a>
            <a href="#instructors" className="text-[var(--dark-text-color)] hover:text-[var(--primary-color)] transition-colors duration-300 font-medium">{t('instructors')}</a>
            <a href="#location" className="text-[var(--dark-text-color)] hover:text-[var(--primary-color)] transition-colors duration-300 font-medium">{t('navContact')}</a>

            {/* Icon Controls */}
            <div className="flex items-center gap-3 ml-2">
              {/* Theme Toggle Icon */}
              <button
                onClick={cycleTheme}
                className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all duration-300 text-[var(--dark-text-color)]"
                title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                aria-label="Toggle theme"
              >
                <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} text-lg`} aria-hidden="true"></i>
              </button>

              {/* Language Toggle Icon */}
              <button
                onClick={toggleLanguage}
                className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all duration-300 text-[var(--dark-text-color)] font-semibold text-sm"
                title={`Switch to ${language === 'pl' ? 'Russian' : 'Polish'}`}
                aria-label="Toggle language"
              >
                {language.toUpperCase()}
              </button>
            </div>

            <a href="#" className="bg-(--primary-color) text-(--primary-button-text-color) px-6 py-3 rounded-lg hover:bg-(--primary-button-hover-bg-color) transition-all duration-300 font-semibold hover:shadow-lg">{t('bookPlace')}</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            data-landingsite-mobile-menu-toggle=""
            className="lg:hidden text-[var(--dark-text-color)] hover:text-[var(--primary-color)] transition-colors p-2"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`} aria-hidden="true"></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div data-landingsite-mobile-menu="" className={`lg:hidden pb-6 border-t border-[var(--light-border-color)] dark:border-gray-700 mt-2 ${isMobileMenuOpen ? '' : 'hidden'}`}>
          <nav className="flex flex-col gap-4 pt-6">
            <a href="#" className="text-[var(--dark-text-color)] hover:text-[var(--primary-color)] transition-colors duration-300 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>{t('gallery')}</a>
            <a href="#courses" className="text-[var(--dark-text-color)] hover:text-[var(--primary-color)] transition-colors duration-300 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>{t('courses')}</a>
            <a href="#instructors" className="text-[var(--dark-text-color)] hover:text-[var(--primary-color)] transition-colors duration-300 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>{t('instructors')}</a>
            <a href="#location" className="text-[var(--dark-text-color)] hover:text-[var(--primary-color)] transition-colors duration-300 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>{t('navContact')}</a>

            {/* Mobile Controls */}
            <div className="flex items-center gap-3 pt-4 border-t border-[var(--light-border-color)] dark:border-gray-700">
              <button
                onClick={cycleTheme}
                className="flex-1 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center gap-2 transition-all duration-300 text-[var(--dark-text-color)] font-medium"
              >
                <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`} aria-hidden="true"></i>
                <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
              </button>
              <button
                onClick={toggleLanguage}
                className="flex-1 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center gap-2 transition-all duration-300 text-[var(--dark-text-color)] font-medium"
              >
                <i className="fas fa-globe" aria-hidden="true"></i>
                <span>{language.toUpperCase()}</span>
              </button>
            </div>

            <a href="#" className="bg-(--primary-color) text-(--primary-button-text-color) px-6 py-3 rounded-lg hover:bg-(--primary-button-hover-bg-color) transition-all duration-300 font-semibold text-center mt-2" onClick={() => setIsMobileMenuOpen(false)}>{t('bookPlace')}</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
