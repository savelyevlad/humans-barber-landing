import React from 'react';

import { useLanguage } from '../context/LanguageContext';

const Features = () => {
  const { t } = useLanguage();
  return (
    <section className="code-section bg-white dark:bg-gray-900 py-16 lg:py-24" id="smjuwjk">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-family-heading)] text-3xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-4" data-translate="whyTitle">{t('whyTitle')}</h2>
          <p className="text-[var(--gray-text-color)] text-lg lg:text-xl max-w-2xl mx-auto" data-translate="whySubtitle">{t('whySubtitle')}</p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:border-[var(--primary-color)] transition-all duration-300 hover:shadow-lg group">
            <div className="w-14 h-14 bg-[var(--primary-color)] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-users text-2xl text-white" aria-hidden="true"></i>
            </div>
            <h3 className="font-[var(--font-family-heading)] text-xl font-bold text-[var(--dark-text-color)] mb-3" data-translate="feature1Title">{t('feature1Title')}</h3>
            <p className="text-[var(--gray-text-color)] leading-relaxed" data-translate="feature1Desc">{t('feature1Desc')}</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:border-[var(--primary-color)] transition-all duration-300 hover:shadow-lg group">
            <div className="w-14 h-14 bg-[var(--primary-color)] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-chalkboard-teacher text-2xl text-white" aria-hidden="true"></i>
            </div>
            <h3 className="font-[var(--font-family-heading)] text-xl font-bold text-[var(--dark-text-color)] mb-3" data-translate="feature2Title">{t('feature2Title')}</h3>
            <p className="text-[var(--gray-text-color)] leading-relaxed" data-translate="feature2Desc">{t('feature2Desc')}</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:border-[var(--primary-color)] transition-all duration-300 hover:shadow-lg group">
            <div className="w-14 h-14 bg-[var(--primary-color)] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-briefcase text-2xl text-white" aria-hidden="true"></i>
            </div>
            <h3 className="font-[var(--font-family-heading)] text-xl font-bold text-[var(--dark-text-color)] mb-3" data-translate="feature3Title">{t('feature3Title')}</h3>
            <p className="text-[var(--gray-text-color)] leading-relaxed" data-translate="feature3Desc">{t('feature3Desc')}</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:border-[var(--primary-color)] transition-all duration-300 hover:shadow-lg group">
            <div className="w-14 h-14 bg-[var(--primary-color)] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-clock text-2xl text-white" aria-hidden="true"></i>
            </div>
            <h3 className="font-[var(--font-family-heading)] text-xl font-bold text-[var(--dark-text-color)] mb-3" data-translate="feature4Title">{t('feature4Title')}</h3>
            <p className="text-[var(--gray-text-color)] leading-relaxed" data-translate="feature4Desc">{t('feature4Desc')}</p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:border-[var(--primary-color)] transition-all duration-300 hover:shadow-lg group">
            <div className="w-14 h-14 bg-[var(--primary-color)] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-language text-2xl text-white" aria-hidden="true"></i>
            </div>
            <h3 className="font-[var(--font-family-heading)] text-xl font-bold text-[var(--dark-text-color)] mb-3" data-translate="feature5Title">{t('feature5Title')}</h3>
            <p className="text-[var(--gray-text-color)] leading-relaxed" data-translate="feature5Desc">{t('feature5Desc')}</p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:border-[var(--primary-color)] transition-all duration-300 hover:shadow-lg group">
            <div className="w-14 h-14 bg-[var(--primary-color)] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-award text-2xl text-white" aria-hidden="true"></i>
            </div>
            <h3 className="font-[var(--font-family-heading)] text-xl font-bold text-[var(--dark-text-color)] mb-3" data-translate="feature6Title">{t('feature6Title')}</h3>
            <p className="text-[var(--gray-text-color)] leading-relaxed" data-translate="feature6Desc">{t('feature6Desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
