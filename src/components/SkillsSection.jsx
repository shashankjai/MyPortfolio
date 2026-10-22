import { LuCode } from 'react-icons/lu';
import Shell from './Shell';
import Reveal from './Reveal';
import Icon from './Icon';
import { spot } from './spot';
import { skillGroups } from '../data/skills';
import { skillIcons } from '../data/skillIcons';

export default function SkillsSection() {
  return (
    <Shell id="skills" lines={['Tools', 'I work with.']} alt>
      <p className="mb-6 text-[15px] text-muted">The languages, frameworks and tools I use to design, build and ship products.</p>
      <Reveal stagger className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <div key={g.title} onMouseMove={spot} style={{ '--i': i }} className="card spot h-full bg-paper p-5">
            <div className="flex items-center justify-between border-b border-line pb-3">
              <h3 className="flex items-center gap-3 text-[15px] font-semibold">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-tint text-brand"><Icon name={g.icon} size={18} /></span>{g.title}
              </h3>
              <span className="font-mono text-xs text-muted">{String(g.items.length).padStart(2, '0')}</span>
            </div>
            <Reveal as="ul" stagger className="mt-4 flex flex-wrap gap-2.5">
              {g.items.map((s, j) => {
                const [Ico, color] = skillIcons[s] || [LuCode, '#2166F3'];
                return (
                  <li key={s} className="skill-tile" style={{ '--i': j, '--c': color }}>
                    <span className="skill-ico"><Ico size={20} color={color} aria-hidden="true" /></span>
                    <span>{s}</span>
                  </li>
                );
              })}
            </Reveal>
          </div>
        ))}
      </Reveal>
    </Shell>
  );
}
