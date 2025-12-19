import React from 'react';

import { useLanguage } from '../context/LanguageContext';

const Courses = () => {
  const { t } = useLanguage();
  return (
    <section className="code-section bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 lg:py-24" id="courses">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1 scale-90 origin-center hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src="photo_5994743330182904392_y.jpg" className="w-full h-auto object-cover" data-media='{"id":"1486391461","src":"iStock","type":"image"}' />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-full mb-6">
              <i className="fas fa-graduation-cap text-[var(--primary-color)]" aria-hidden="true"></i>
              <span className="text-[var(--dark-text-color)] text-sm font-medium">{t('availablePrograms')}</span>
            </div>

            <h2 className="font-[var(--font-family-heading)] text-3xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-6 whitespace-pre-line">
              {t('ourCourses')}
            </h2>

            <p className="text-[var(--gray-text-color)] text-lg mb-8 leading-relaxed">
              {t('coursesSubtitle')}
            </p>

            {/* Course 1: From Zero to Pro */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-[var(--primary-color)] mb-6 shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-[var(--font-family-heading)] text-2xl font-bold text-[var(--dark-text-color)] mb-2">
                    {t('course1Title')}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-[var(--gray-text-color)]">
                    <span className="flex items-center gap-1">
                      <i className="fas fa-clock" aria-hidden="true"></i>
                      {t('course1Duration')}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="fas fa-signal" aria-hidden="true"></i>
                      {t('course1Level')}
                    </span>
                  </div>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">{t('courseAvailable')}</span>
              </div>
              <p className="text-[var(--gray-text-color)] text-sm mb-4">
                {t('course1Desc')}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[var(--primary-color)] font-semibold hover:gap-3 transition-all">
                {t('courseDetails')}
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>

            {/* Course 2: Pro Workshops */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-300 dark:border-gray-700 mb-10 shadow-md">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-[var(--font-family-heading)] text-2xl font-bold text-[var(--dark-text-color)] mb-2">
                    {t('course2Title')}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-[var(--gray-text-color)]">
                    <span className="flex items-center gap-1">
                      <i className="fas fa-clock" aria-hidden="true"></i>
                      {t('course2Duration')}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="fas fa-signal" aria-hidden="true"></i>
                      {t('course2Level')}
                    </span>
                  </div>
                </div>
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">{t('courseSoon')}</span>
              </div>
              <p className="text-[var(--gray-text-color)] text-sm mb-4">
                {t('course2Desc')}
              </p>
              <span className="inline-flex items-center gap-2 text-[var(--gray-text-color)] font-medium">
                {t('availableSoon')}
              </span>
            </div>

            <a href="#" className="inline-flex items-center gap-2 bg-[var(--primary-color)] text-[var(--primary-button-text-color)] px-8 py-4 rounded-lg font-bold hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 hover:shadow-lg">
              {t('seeAllPrograms')}
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
