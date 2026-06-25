import React, { useState, useEffect } from 'react';
import Sidebar from './components/layout/Sidebar';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = ['about', 'work', 'experience'];

    const onScroll = () => {
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 140 && bottom > 140;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Sidebar activeSection={activeSection} />

      <main className="lg:pl-[min(100%,17rem)] xl:pl-72">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-10 sm:py-14 lg:py-16">
          <About />
          <Projects />
          <Experience />
        </div>
      </main>
    </div>
  );
}

export default App;
