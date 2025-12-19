import React from 'react';

const SectionBadge = ({ icon, text }) => {
  return (
    <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-full mb-6">
      <i className={`fas fa-${icon} text-[var(--primary-color)]`} aria-hidden="true"></i>
      <span className="text-[var(--dark-text-color)] text-sm font-medium">{text}</span>
    </div>
  );
};

export default SectionBadge;
