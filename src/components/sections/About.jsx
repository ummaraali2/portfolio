import React from 'react';
import { profile } from '../../data/content';

const About = () => {
  return (
    <section id="about" className="mb-20 sm:mb-28 scroll-mt-24">
      <p className="lg:hidden font-serif text-4xl sm:text-5xl tracking-[-0.02em] text-ink mb-6">
        {profile.name}
      </p>
      <div className="lg:hidden mb-8 space-y-1">
        <p className="text-stone text-[0.9375rem]">{profile.title}</p>
        {profile.descriptors?.map((line) => (
          <p key={line} className="text-stone text-[0.9375rem]">
            {line}
          </p>
        ))}
      </div>

      <p className="text-ink max-w-prose leading-[1.8]">{profile.intro}</p>
      <p className="mt-5 text-stone max-w-prose leading-[1.8]">{profile.aside}</p>
    </section>
  );
};

export default About;
