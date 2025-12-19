import React from 'react';

import { useLanguage } from '../context/LanguageContext';

const Admission = () => {
  const { t } = useLanguage();
  return (
    <section className="code-section bg-white dark:bg-gray-900 py-16 lg:py-24" id="s3vn3d">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/c2322e2e-f917-4ff2-2911-49d66e979400/publicContain" alt="Young beautiful female barber with short red hair learning to cut hair in. She is in education training in a barber shop. A young handsome male barber observes her work." className="w-full h-full object-cover opacity-10" data-media='{"id":"1486391167","src":"iStock","type":"image"}' />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100/95 via-white/98 to-white dark:from-gray-900/95 dark:via-gray-900/98 dark:to-gray-900"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Card */}
          <div className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-2xl p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-300 px-4 py-2 rounded-full mb-6">
                <i className="fas fa-fire text-red-600" aria-hidden="true"></i>
                <span className="text-red-700 text-sm font-bold">{t('limitedSpots')}</span>
              </div>

              <h2 className="font-[var(--font-family-heading)] text-3xl lg:text-5xl font-bold text-[var(--dark-text-color)] dark:text-white mb-4 whitespace-pre-line">
                {t('admissionTitle')}
              </h2>

              <p className="text-[var(--gray-text-color)] dark:text-gray-300 text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
                {t('admissionSubtitle')}
              </p>
            </div>

            {/* Course Details Grid */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center">
                <i className="fas fa-calendar-alt text-3xl text-[var(--primary-color)] mb-3" aria-hidden="true"></i>
                <div className="text-[var(--gray-text-color)] dark:text-gray-300 text-sm mb-1">{t('startDateLabel')}</div>
                <div className="text-[var(--dark-text-color)] dark:text-white font-bold text-lg">{t('startDate')}</div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center">
                <i className="fas fa-clock text-3xl text-[var(--primary-color)] mb-3" aria-hidden="true"></i>
                <div className="text-[var(--gray-text-color)] text-sm mb-1">{t('durationLabel')}</div>
                <div className="text-[var(--dark-text-color)] font-bold text-lg">{t('duration')}</div>
              </div>

              <div className="bg-gray-50 border border-gray-300 rounded-xl p-6 text-center">
                <i className="fas fa-users text-3xl text-[var(--primary-color)] mb-3" aria-hidden="true"></i>
                <div className="text-[var(--gray-text-color)] text-sm mb-1">{t('groupSizeLabel')}</div>
                <div className="text-[var(--dark-text-color)] font-bold text-lg">{t('groupSize')}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a href="#" className="bg-[var(--primary-color)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 hover:shadow-xl text-center">
                {t('enrollNow')}
              </a>
              <a href="tel:+48574268809" className="bg-white border-2 border-gray-300 text-[var(--dark-text-color)] px-8 py-4 rounded-lg font-semibold text-lg hover:border-[var(--primary-color)] hover:bg-gray-50 transition-all duration-300 text-center flex items-center justify-center gap-2">
                <i className="fas fa-phone" aria-hidden="true"></i>
                +48 574 268 809
              </a>
            </div>

            {/* Bottom Note */}
            <div className="text-center">
              <p className="text-[var(--gray-text-color)] text-sm">
                <i className="fas fa-info-circle mr-2" aria-hidden="true"></i>
                {t('admissionNote')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--primary-color)] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--accent-color)] opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Admission;
