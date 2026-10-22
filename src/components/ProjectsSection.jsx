import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Shell from './Shell';
import Reveal from './Reveal';
import Icon from './Icon';
import { spot } from './spot';
import { projects, projectFilters } from '../data/projects';

const MAX_TAGS = 4;

function ProjectCard({ p, i }) {
  const [open, setOpen] = useState(false);
  const extra = p.tech.length - MAX_TAGS;
  const panelId = `${p.id}-features`;
  return (
    <article onMouseMove={spot} style={{ '--i': i }} className="card spot group flex h-full bg-paper p-6">
      <div className="relative flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-tint text-brand transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105" aria-hidden="true"><Icon name={p.icon} size={22} strokeWidth={1.6} /></span>
          <div className="min-w-0"><h3 className="text-xl font-semibold leading-snug">{p.title}</h3><p className="text-[13px] text-brand">{p.category}</p></div>
        </div>
        {p.subtitle && <p className="mt-2 text-[14px] text-muted">{p.subtitle}</p>}
        <p className="mt-4 text-[15px] leading-relaxed text-muted">{p.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${p.title} technologies`}>
          {p.tech.slice(0, MAX_TAGS).map((t) => <li key={t} className="tag">{t}</li>)}
          {extra > 0 && <li className="tag">+{extra}</li>}
        </ul>
        {p.features.length > 0 && (
          <>
            <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={panelId}
              className="mt-4 inline-flex w-fit items-center gap-1.5 text-[14px] font-medium text-brand">
              {open ? 'Hide features' : 'Key features'}
              <ChevronDown size={15} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </button>
            <div id={panelId} className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <ul className="overflow-hidden">
                {p.features.map((f, k) => (
                  <li key={f} style={{ transitionDelay: open ? `${k * 60}ms` : '0ms' }}
                    className={`flex gap-2 pt-2 text-[14px] leading-snug text-muted transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}>
                    <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />{f}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        <div className="mt-auto flex flex-wrap gap-2.5 pt-6">
          <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} on GitHub (opens in new tab)`} className="btn btn-light min-h-[42px] px-5 py-1.5 text-[14px]">GitHub</a>
          {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live demo (opens in new tab)`} className="btn btn-dark min-h-[42px] px-5 py-1.5 text-[14px]">Live Demo</a>}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');
  const shown = projects.filter((p) => filter === 'all' || p.filters.includes(filter));
  return (
    <Shell id="projects" lines={['Things', 'I’ve built.']}>
      <p className="mb-5 max-w-lg text-[15px] text-muted">A selection of projects where I explore ideas, build useful features, and solve real problems.</p>
      <div role="group" aria-label="Filter projects" className="mb-6 flex flex-wrap gap-2">
        {projectFilters.map((f) => (
          <button key={f.key} type="button" onClick={() => setFilter(f.key)} aria-pressed={filter === f.key}
            className={`rounded-full border px-4 py-1.5 text-[13px] transition-all duration-200 active:scale-95 ${filter === f.key ? 'border-brand bg-brand text-white' : 'border-line bg-paper text-muted hover:border-brand hover:text-brand'}`}>{f.label}</button>
        ))}
      </div>
      <Reveal key={filter} stagger className="grid gap-4 md:grid-cols-2">
        {shown.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
      </Reveal>
    </Shell>
  );
}
