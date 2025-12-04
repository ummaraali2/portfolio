import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
      <p>© {currentYear} Ummara Ali Syeda. Built with React & Tailwind CSS</p>
    </footer>
  );
};

export default Footer;