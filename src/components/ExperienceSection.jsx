import Shell from './Shell';
import { spot } from './spot';
import { experience } from '../data/experience';

export default function ExperienceSection() {
  return (
    <Shell id="experience" lines={['Where I’ve', 'contributed.']} alt>
      {experience.length === 0 ? (
        <p className="max-w-xl border-l-2 border-brand pl-5 text-muted">Experience details are coming soon.</p>
      ) : (
        <ol className="relative space-y-6 pl-7">
          <span aria-hidden="true" className="tl-line absolute bottom-0 left-0 top-2 w-px bg-line" />
          {experience.map((e) => (
            <li key={e.org + e.period} className="relative">
              <span aria-hidden="true" className="tl-dot absolute -left-[34px] top-7 h-3 w-3 rounded-full border-2 border-alt bg-brand" />
              <div onMouseMove={spot} className="card spot bg-paper p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold leading-snug">{e.org}</h3>
                    <p className="mt-0.5 font-medium text-brand">{e.role}</p>
                  </div>
                  <span className="rounded-full border border-line bg-alt px-3 py-1 font-mono text-xs text-muted">{e.period}</span>
                </div>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[14px] leading-relaxed text-muted marker:text-brand">
                  {e.points.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      )}
    </Shell>
  );
}
