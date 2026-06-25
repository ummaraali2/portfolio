import React, { useState, useRef } from 'react';
import { Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { profile, projects } from '../../data/content';

const ProjectCarousel = ({ project }) => {
  const href = project.live || project.github;
  const images = project.images?.length
    ? project.images
    : project.image
      ? [project.image]
      : [`${project.id}.svg`];

  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const multi = images.length > 1;

  const scrollTo = (index) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.offsetWidth, behavior: 'smooth' });
    setActive(index);
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track || !multi) return;
    setActive(Math.round(track.scrollLeft / track.offsetWidth));
  };

  return (
    <div>
      <div className="relative">
        {multi && active > 0 && (
          <button
            type="button"
            onClick={() => scrollTo(active - 1)}
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center rounded-full bg-paper/90 border border-line text-ink hover:bg-wash"
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={16} />
          </button>
        )}

        <div
          ref={trackRef}
          onScroll={onScroll}
          className={`snap-carousel flex ${multi ? 'overflow-x-auto snap-x snap-mandatory' : ''}`}
        >
          {images.map((file) => (
            <a
              key={file}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block group shrink-0 ${multi ? 'w-full snap-start' : 'w-full'}`}
              aria-label={`Preview of ${project.title}`}
            >
              <div className="overflow-hidden rounded-md border border-line bg-wash transition-shadow duration-300 group-hover:shadow-md group-hover:border-stone/40">
                <img
                  src={`${process.env.PUBLIC_URL}/projects/${file}`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block"
                />
              </div>
            </a>
          ))}
        </div>

        {multi && active < images.length - 1 && (
          <button
            type="button"
            onClick={() => scrollTo(active + 1)}
            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center rounded-full bg-paper/90 border border-line text-ink hover:bg-wash"
            aria-label="Next screenshot"
          >
            <ChevronRight size={16} />
          </button>
        )}
      </div>

      {multi && (
        <div className="flex justify-center gap-2 mt-3">
          {images.map((file, i) => (
            <button
              key={file}
              type="button"
              onClick={() => scrollTo(i)}
              className="p-3 -m-2 flex items-center justify-center"
              aria-label={`Screenshot ${i + 1}`}
            >
              <span
                className={`block w-2 h-2 rounded-full transition-colors ${
                  i === active ? 'bg-ink' : 'bg-line hover:bg-fog'
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectLinks = ({ project }) => (
  <div className="flex items-center gap-3 shrink-0">
    {project.live && (
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="link text-[0.9375rem] font-medium"
      >
        Visit site ↗
      </a>
    )}
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-ink hover:text-stone transition-colors p-0.5"
      aria-label={`${project.title} on GitHub`}
    >
      <Github size={18} strokeWidth={1.75} />
    </a>
  </div>
);

const Projects = () => {
  const [openId, setOpenId] = useState(projects[0]?.id ?? null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="work" className="mb-20 sm:mb-28 scroll-mt-24">
      <h2 className="font-serif text-3xl sm:text-4xl tracking-[-0.02em] text-ink mb-10">
        Selected work
      </h2>

      <ol className="rule">
        {projects.map((project, i) => {
          const isOpen = openId === project.id;
          const num = String(i + 1).padStart(2, '0');

          return (
            <li key={project.id} className="rule">
              <div className="py-7 sm:py-9">
                <div className="flex gap-3 sm:gap-6 mb-5 pl-6 sm:pl-10 lg:pl-12">
                  <span className="text-fog text-sm tabular-nums w-6 shrink-0 pt-1">{num}</span>
                  <div className="flex-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                    <button
                      type="button"
                      onClick={() => toggle(project.id)}
                      className="font-medium text-lg sm:text-xl text-ink hover:text-stone transition-colors duration-300 text-left"
                      aria-expanded={isOpen}
                    >
                      {project.title}
                    </button>
                    <ProjectLinks project={project} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-[minmax(0,1fr)_minmax(280px,380px)] lg:grid-cols-[minmax(0,1fr)_400px] gap-6 lg:gap-10 pl-6 sm:pl-10 lg:pl-12">
                  <div className="min-w-0 order-2 sm:order-1">
                    <p className="text-stone text-[0.9375rem] leading-relaxed">{project.description}</p>

                    {project.community && (
                      <p className="text-ink text-[0.9375rem] leading-relaxed mt-2">
                        {project.community}
                      </p>
                    )}

                    <button
                      type="button"
                      onClick={() => toggle(project.id)}
                      className="mt-3 text-fog text-sm hover:text-stone transition-colors"
                      aria-expanded={isOpen}
                    >
                      {isOpen ? 'Less detail' : 'More detail'}
                    </button>

                    <div className={`expand-grid ${isOpen ? 'open' : ''}`}>
                      <div className="expand-inner">
                        <div className="pt-4 pb-1">
                          <p className="text-stone text-[0.9375rem] leading-relaxed">{project.detail}</p>
                          <p className="mt-4 text-fog text-sm">{project.stack}</p>
                          {project.note && (
                            <p className="mt-2 text-fog text-sm italic">{project.note}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="order-1 sm:order-2 sm:sticky sm:top-24">
                    <ProjectCarousel project={project} />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <p className="pl-6 sm:pl-10 lg:pl-12 pt-8">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link text-[0.9375rem] font-medium"
        >
          More projects on GitHub ↗
        </a>
      </p>
    </section>
  );
};

export default Projects;
