import React, { useState, useEffect } from 'react';

const Navigation = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['home', 'projects', 'experience', 'education', 'contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <ul className="flex gap-8 justify-end">
          {navItems.map((item) => (
            <li key={item}>
              <button onClick={() => scrollToSection(item)} className={`capitalize text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${activeSection === item ? 'text-blue-400' : 'text-gray-300'}`}>
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;