import { ArrowUpRight } from 'lucide-react';
import Shell from './Shell';
import Reveal from './Reveal';
import CountUp from './CountUp';
import { spot } from './spot';
import { codingProfiles } from '../data/codingProfiles';

export default function CodingProfilesSection() {
  return (
    <Shell id="coding" lines={['Coding', 'Profiles.']}>
      <Reveal stagger className="grid gap-4 md:grid-cols-2">
        {codingProfiles.map(({ name, icon: PlatformIcon, color, rating, label, note, href }, i) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} profile, ${label} ${rating} (opens in new tab)`}
            onMouseMove={spot}
            style={{ '--i': i }}
            className="card spot group bg-paper p-6"
          >
            <div className="relative">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-3 text-xl font-semibold">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md"
                    style={{ color, backgroundColor: `${color}1A` }}
                  >
                    <PlatformIcon size={22} />
                  </span>
                  {name}
                </h3>
                <ArrowUpRight
                  size={20}
                  aria-hidden="true"
                  className="text-muted transition duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand"
                />
              </div>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{label}</p>
              <p className="mt-1 font-display text-4xl font-semibold"><CountUp value={rating} /></p>
              <p className="mt-5 border-t border-line pt-4 text-[14px] text-muted">{note}</p>
            </div>
          </a>
        ))}
      </Reveal>
      <p className="mt-4 font-mono text-[11px] text-muted">Ratings are snapshots recorded in my resume and may have changed since.</p>
    </Shell>
  );
}
