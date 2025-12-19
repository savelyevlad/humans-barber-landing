import React from 'react';
import SectionBadge from './SectionBadge';
import { useLanguage } from '../context/LanguageContext';

const Instructors = () => {
  const { t } = useLanguage();
  return (
    <section className="code-section bg-gray-50 dark:bg-gray-900 py-16 lg:py-24" id="instructors">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionBadge icon="user-tie" text={t('teamBadge')} />

          <h2 className="font-[var(--font-family-heading)] text-3xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-4">
            <span data-translate="teamTitle">{t('teamTitle')}</span><br />
            <span data-translate="teamTitle2">{t('teamTitle2')}</span>
          </h2>
        </div>

        {/* Instructors Grid */}
        <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {/* Instructor 1: David */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent dark:border-gray-700 hover:border-[var(--primary-color)] group">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Image */}
              <div className="relative h-96 lg:h-auto">
                <img src="photo_5994743330182904383_y.jpg" alt="Professional hairdresser does haircut for caucasian bearded man using comb and scissors at barber shop." className="w-full h-full object-cover" data-media='{"id":"1458233564","src":"iStock","type":"image"}' />

                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">7+</div>
                      <div className="text-xs text-gray-200" data-translate="yearsExp">{t('yearsExp')}</div>
                    </div>
                    <div className="text-center border-l border-r border-gray-400">
                      <div className="text-2xl font-bold text-white mb-1">160</div>
                      <div className="text-xs text-gray-200" data-translate="hoursTraining">{t('hoursTraining')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">30+</div>
                      <div className="text-xs text-gray-200" data-translate="models">{t('models')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-[var(--dark-text-color)] mb-2">{t('instructorName')}</h3>
                <p className="text-[var(--gray-text-color)] font-medium mb-6">{t('instructorRole')}</p>

                <p className="text-[var(--gray-text-color)] text-lg leading-relaxed mb-6">
                  {t('instructorBio')}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <i className="fas fa-check-circle text-green-600 text-xl" aria-hidden="true"></i>
                    <span className="text-[var(--dark-text-color)]" data-translate="teamCheck1">{t('teamCheck1')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fas fa-check-circle text-green-600 text-xl" aria-hidden="true"></i>
                    <span className="text-[var(--dark-text-color)]" data-translate="teamCheck2">{t('teamCheck2')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fas fa-check-circle text-green-600 text-xl" aria-hidden="true"></i>
                    <span className="text-[var(--dark-text-color)]" data-translate="teamCheck3">{t('teamCheck3')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fas fa-check-circle text-green-600 text-xl" aria-hidden="true"></i>
                    <span className="text-[var(--dark-text-color)]" data-translate="teamCheck4">{t('teamCheck4')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Instructors;
