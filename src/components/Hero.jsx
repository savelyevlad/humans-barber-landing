import React from 'react';

import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="code-section relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden" id="so4bdwf">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/32e9b319-0b00-4da2-fdc5-6354865e9400/publicContain" alt="Professional barber teaches student to make men's hairstyles on model." className="w-full h-full object-cover opacity-15" data-media='{"id":"1631354551","src":"iStock","type":"image"}' />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-gray-100/95 dark:from-gray-900/90 dark:to-gray-800/95"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-full mb-6 shadow-sm">
            <i className="fas fa-map-marker-alt text-[var(--primary-color)]" aria-hidden="true"></i>
            <span className="text-[var(--dark-text-color)] text-sm font-medium">{t('heroBadge')}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-[var(--font-family-heading)] text-3xl sm:text-5xl lg:text-7xl font-bold text-[var(--dark-text-color)] mb-6 leading-tight break-words hyphens-auto">
            <span data-translate="heroTitle1">{t('heroTitle1')}</span><br />
            <span className="bg-gradient-to-r from-gray-700 to-[var(--primary-color)] bg-clip-text text-transparent" data-translate="heroTitle2">{t('heroTitle2')}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-[var(--dark-text-color)] text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed" data-translate="heroSubtitle">{t('heroSubtitle')}</p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-600 text-xl" aria-hidden="true"></i>
              <span className="text-[var(--dark-text-color)] font-medium" data-translate="heroBenefit1">{t('heroBenefit1')}</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-600 text-xl" aria-hidden="true"></i>
              <span className="text-[var(--dark-text-color)] font-medium" data-translate="heroBenefit2">{t('heroBenefit2')}</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-600 text-xl" aria-hidden="true"></i>
              <span className="text-[var(--dark-text-color)] font-medium" data-translate="heroBenefit3">{t('heroBenefit3')}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href="#" className="bg-[var(--primary-color)] text-(--primary-button-text-color) px-8 py-4 rounded-lg font-bold text-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 hover:shadow-xl hover:scale-105 w-full sm:w-auto" data-translate="heroCta1">{t('heroCta1')}</a>
            <a href="#" className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-[var(--dark-text-color)] px-8 py-4 rounded-lg font-semibold text-lg hover:border-[var(--primary-color)] hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 w-full sm:w-auto" data-translate="heroCta2">{t('heroCta2')}</a>
            <a href="tel:+48574268809" className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-[var(--dark-text-color)] px-6 py-4 rounded-lg font-semibold text-lg hover:border-[var(--primary-color)] hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
              <i className="fas fa-phone" aria-hidden="true"></i>
              +48 574 268 809
            </a>
          </div>

          {/* Microcopy */}
          <p className="text-[var(--gray-text-color)] text-sm">
            <i className="fas fa-calendar-alt mr-2" aria-hidden="true"></i>
            <span data-translate="heroNextCourse">{t('heroNextCourse')}</span>
            <span className="text-[var(--dark-text-color)] font-semibold" data-translate="heroDate"> {t('heroDate')} </span>
            •
            <span data-translate="heroLimited"> {t('heroLimited')}</span>
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--primary-color)] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--accent-color)] rounded-full opacity-5 blur-3xl"></div>
    </section>
  );
};

export default Hero;
