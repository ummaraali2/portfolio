import React, { useState, useEffect } from 'react';
import ParticleField from '../3d/ParticleField';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      <ParticleField />
      <div className="text-center relative z-10">
        <div className="mb-3 sm:mb-4 text-blue-400 text-xs sm:text-sm tracking-widest uppercase">
          Welcome to my portfolio
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent px-4">
          Ummara Ali Syeda
        </h1>
        <div className="text-xl sm:text-2xl text-gray-300 mb-6 sm:mb-8 h-8">
          {displayText}
          <span className="animate-pulse">|</span>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-4">
          GIS enthusiast crafting elegant solutions to complex problems. Passionate about clean code, innovative design, and creating exceptional user experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <a href="#projects" className="px-6 sm:px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-300 text-sm sm:text-base">
            View Projects
          </a>
          <a href="#contact" className="px-6 sm:px-8 py-3 border border-gray-600 hover:border-blue-400 rounded-lg transition-colors duration-300 text-sm sm:text-base">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;