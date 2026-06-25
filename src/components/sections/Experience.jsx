import React from 'react';
import { experiences, education } from '../../data/content';

const ContentGrid = ({ children }) => (
  <div className="grid sm:grid-cols-[minmax(0,1fr)_minmax(280px,380px)] lg:grid-cols-[minmax(0,1fr)_400px] gap-6 lg:gap-10 pl-6 sm:pl-10 lg:pl-12">
    <div className="min-w-0">{children}</div>
    <div className="hidden sm:block" aria-hidden="true" />
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="mb-16 scroll-mt-24">
      <h2 className="font-serif text-3xl sm:text-4xl tracking-[-0.02em] text-ink mb-10">
        Experience
      </h2>

      <div className="rule">
        <div className="py-7 sm:py-9">
          <ContentGrid>
            <div className="space-y-10">
              {experiences.map((job) => (
                <article key={`${job.role}-${job.when}`}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                    <h3 className="font-medium text-ink">{job.role}</h3>
                    <time className="text-fog text-sm shrink-0">{job.when}</time>
                  </div>
                  <p className="text-stone text-sm mb-2">
                    {job.place ? `${job.org}, ${job.place}` : job.org}
                  </p>
                  <p className="text-stone text-[0.9375rem] leading-relaxed">{job.text}</p>
                </article>
              ))}
            </div>
          </ContentGrid>
        </div>
      </div>

      <div className="rule">
        <div className="py-7 sm:py-9">
          <ContentGrid>
            <div>
              <h3 className="font-serif text-2xl text-ink mb-6">Education</h3>
              <ul className="space-y-4">
                {education.map((edu) => (
                  <li
                    key={edu.degree}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1"
                  >
                    <span className="text-ink text-[0.9375rem]">
                      {edu.degree}
                      <span className="text-stone">, {edu.school}</span>
                    </span>
                    {edu.when && <span className="text-fog text-sm">{edu.when}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </ContentGrid>
        </div>
      </div>

      <footer className="lg:hidden mt-16 pt-8 rule text-fog text-sm pl-6 sm:pl-10 lg:pl-12">
        <p>© {new Date().getFullYear()} Ummara Ali Syeda</p>
      </footer>
    </section>
  );
};

export default Experience;
