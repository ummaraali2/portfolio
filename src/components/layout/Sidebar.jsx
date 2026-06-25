import React, { useState, useEffect } from 'react';
import { profile, nav } from '../../data/content';
import ContactModal from '../ui/ContactModal';

const Sidebar = ({ activeSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const links = (
    <ul className="space-y-1">
      {nav.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => jump(item.id)}
            className={`text-left text-[0.9375rem] py-1 transition-colors ${
              activeSection === item.id ? 'text-ink font-medium' : 'text-stone hover:text-ink'
            }`}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );

  const contact = (
    <div className="space-y-1 text-[0.9375rem]">
      <button
        type="button"
        onClick={() => {
          setContactOpen(true);
          setMobileOpen(false);
        }}
        className="link block text-left"
      >
        Contact me
      </button>
      <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link block">
        GitHub
      </a>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link block">
        LinkedIn
      </a>
    </div>
  );

  return (
    <>
      <header className="lg:hidden sticky top-0 z-40 bg-paper/90 backdrop-blur-sm border-b border-line px-5 py-4 flex items-center justify-between">
        <span className="font-serif text-xl">{profile.name.split(' ')[0]}</span>
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="text-stone text-sm font-medium py-2 px-1 -mr-1 min-h-[44px] min-w-[44px] flex items-center justify-end"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </header>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-paper px-5 pt-20 pb-8 overflow-y-auto">
          <nav className="mb-10">{links}</nav>
          {contact}
        </div>
      )}

      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:w-[min(100%,17rem)] xl:w-72 lg:px-10 lg:py-14 lg:border-r lg:border-line">
        <div className="mb-auto">
          <h1 className="font-serif text-[2.125rem] leading-[1.15] tracking-[-0.02em] text-ink">
            {profile.name}
          </h1>
          <p className="mt-2 text-stone text-[0.9375rem]">{profile.title}</p>
          {profile.descriptors?.map((line) => (
            <p key={line} className="text-stone text-[0.9375rem]">
              {line}
            </p>
          ))}

          <nav className="mt-10">{links}</nav>
        </div>

        <div className="mt-10 pt-8 border-t border-line">
          {contact}
        </div>
      </aside>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};

export default Sidebar;
