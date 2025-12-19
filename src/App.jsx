
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Instructors from './components/Instructors';
import Admission from './components/Admission';
import Location from './components/Location';
import Footer from './components/Footer';

import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="frame-root h-full dark:bg-gray-900 transition-colors duration-300">
          <div className="frame-content h-full">
            <div className="[font-family:var(--font-family-body)]">
              <Header />
              <Hero />
              <Features />
              <Courses />
              <Instructors />
              <Admission />
              <Location />
              <Footer />
            </div>
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
