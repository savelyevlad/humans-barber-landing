import React from 'react';
import SectionBadge from './SectionBadge';
import { useLanguage } from '../context/LanguageContext';

const Location = () => {
  const { t } = useLanguage();
  return (
    <section className="code-section bg-gray-50 dark:bg-gray-900 py-16 lg:py-24" id="location">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionBadge icon="map-marker-alt" text={t('locationBadge')} />

          <h2 className="font-[var(--font-family-heading)] text-3xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-4">
            {t('locationTitle')}
          </h2>

          <p className="text-[var(--gray-text-color)] text-lg max-w-2xl mx-auto mb-8">
            {t('locationSubtitle')}
          </p>
        </div>

        {/* Map and Contact Info Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="font-[var(--font-family-heading)] text-2xl font-bold text-[var(--dark-text-color)] mb-6" data-translate="locationContactTitle">
                {t('locationContactTitle')}
              </h3>
              <div className="flex flex-col gap-6">
                {/* Address Card */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--primary-color)]/10 dark:bg-[var(--primary-color)]/20 rounded-lg flex items-center justify-center flex-shrink-0 text-[var(--primary-color)]">
                    <i className="fas fa-map-marker-alt text-lg" aria-hidden="true"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--dark-text-color)] mb-1" data-translate="contactAddressLabel">{t('contactAddressLabel')}</p>
                    <p className="text-[var(--gray-text-color)]">ul. Tadeusza Kościuszki 50<br />31-000 Kraków, Poland</p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--primary-color)]/10 dark:bg-[var(--primary-color)]/20 rounded-lg flex items-center justify-center flex-shrink-0 text-[var(--primary-color)]">
                    <i className="fas fa-phone-alt text-lg" aria-hidden="true"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--dark-text-color)] mb-1" data-translate="contactPhoneLabel">{t('contactPhoneLabel')}</p>
                    <a href="tel:+48574268809" className="text-[var(--gray-text-color)] hover:text-[var(--primary-color)] transition-colors">
                      +48 574 268 809
                    </a>
                  </div>
                </div>

                {/* Instagram Card */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--primary-color)]/10 dark:bg-[var(--primary-color)]/20 rounded-lg flex items-center justify-center flex-shrink-0 text-[var(--primary-color)]">
                    <i className="fab fa-instagram text-lg" aria-hidden="true"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--dark-text-color)] mb-1">Instagram</p>
                    <a href="https://instagram.com/humans_barber_shop" target="_blank" rel="noopener noreferrer" className="text-[var(--gray-text-color)] hover:text-[var(--primary-color)] transition-colors">@humans_barber_shop</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="lg:col-span-2">
            {/* Map */}
            <div className="h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 relative z-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.464672688538!2d19.92476597652368!3d50.05779097151978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165ba2c496c00f%3A0xe54564c767858d4a!2sTadeusza%20Ko%C5%9Bciuszki%2050%2C%2030-114%20Krak%C3%B3w!5e0!3m2!1sen!2spl!4v1709665432123!5m2!1sen!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Location;
