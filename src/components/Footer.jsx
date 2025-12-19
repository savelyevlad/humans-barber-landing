import React from 'react';

import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="code-section bg-gray-50 dark:bg-black py-12 border-t border-gray-200 dark:border-gray-800" id="global-footer">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/9c7e845f-73cb-4ba7-bc98-be53686c4000/publicContain" alt="Humans Barber School" className="h-28 py-2" data-logo="" />
            </a>
            <p className="text-[var(--gray-text-color)] text-sm leading-relaxed mb-6">
              {t('footerDescription')}
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/humans_barber_shop" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-[var(--dark-text-color)] hover:bg-[var(--primary-color)] hover:text-white transition-colors">
                <i className="fab fa-instagram text-lg" aria-hidden="true"></i>
              </a>
              <a href="tel:+48574268809" className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-[var(--dark-text-color)] hover:bg-[var(--primary-color)] hover:text-white transition-colors">
                <i className="fas fa-phone text-lg" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[var(--font-family-heading)] text-[var(--dark-text-color)] font-bold mb-6">{t('footerQuickLinks')}</h4>
            <ul className="space-y-3">
              <li><a href="#courses" className="text-[var(--gray-text-color)] hover:text-[var(--primary-color)] transition-colors">{t('footerCourses')}</a></li>
              <li><a href="#instructors" className="text-[var(--gray-text-color)] hover:text-[var(--primary-color)] transition-colors">{t('footerInstructors')}</a></li>
              <li><a href="#gallery" className="text-[var(--gray-text-color)] hover:text-[var(--primary-color)] transition-colors">{t('footerGallery')}</a></li>
              <li><a href="#location" className="text-[var(--gray-text-color)] hover:text-[var(--primary-color)] transition-colors">{t('footerContact')}</a></li>
            </ul>
          </div>

          {/* More Pages */}
          <div>
            <h4 className="font-[var(--font-family-heading)] text-[var(--dark-text-color)] dark:text-white font-bold mb-6">{t('footerMore')}</h4>
            <ul className="space-y-3">
              <li><a href="tel:+48574268809" className="text-[var(--gray-text-color)] hover:text-[var(--primary-color)] transition-colors">{t('contactPhoneLabel')}</a></li>
              <li><a href="https://instagram.com/humans_barber_shop" target="_blank" rel="noopener noreferrer" className="text-[var(--gray-text-color)] hover:text-[var(--primary-color)] transition-colors">Instagram</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-[var(--font-family-heading)] text-[var(--dark-text-color)] dark:text-white font-bold mb-6">{t('footerContact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-[var(--primary-color)] mt-1" aria-hidden="true"></i>
                <span className="text-[var(--gray-text-color)] text-sm whitespace-pre-line">{t('footerAddress')}</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-phone text-[var(--primary-color)] mt-1" aria-hidden="true"></i>
                <a href="tel:+48574268809" className="text-[var(--gray-text-color)] text-sm hover:text-[var(--primary-color)] transition-colors">+48 574 268 809</a>
              </li>
              <li className="flex items-start gap-3">
                <i className="fab fa-instagram text-[var(--primary-color)] mt-1" aria-hidden="true"></i>
                <a href="https://instagram.com/humans_barber_shop" target="_blank" rel="noopener noreferrer" className="text-[var(--gray-text-color)] text-sm hover:text-[var(--primary-color)] transition-colors">@humans_barber_shop</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 dark:border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[var(--gray-text-color)] text-sm text-center sm:text-left">{t('footerRights')}</p>
            <p className="text-[var(--gray-text-color)] text-sm">
              <span className="font-semibold text-[var(--dark-text-color)] dark:text-gray-300">{t('footerSlogan')}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
