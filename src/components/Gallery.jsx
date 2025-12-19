import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();

  const images = [
    { src: '/IMG_3885.JPG', alt: 'Barber work example 1' },
    { src: '/IMG_3920.PNG', alt: 'Barber work example 2' },
    { src: '/IMG_3922.PNG', alt: 'Barber work example 3' },
    { src: '/IMG_3924.PNG', alt: 'Barber work example 4' },
    { src: '/IMG_7547.JPG', alt: 'Barber work example 5' },
    { src: '/IMG_7549 (2).JPG', alt: 'Barber work example 6' },
  ];

  return (
    <section className="code-section bg-white dark:bg-gray-900 py-16 lg:py-24" id="gallery">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-full mb-6">
            <i className="fas fa-images text-[var(--primary-color)]" aria-hidden="true"></i>
            <span className="text-[var(--dark-text-color)] text-sm font-medium">{t('galleryBadge')}</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-[var(--primary-color)] transition-all duration-300 hover:shadow-lg group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
