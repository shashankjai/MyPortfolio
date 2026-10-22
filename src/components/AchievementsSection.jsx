import Shell from './Shell';
import Reveal from './Reveal';
import CountUp from './CountUp';
import { spot } from './spot';
import { achievements } from '../data/achievements';

export default function AchievementsSection() {
  return (
    <Shell id="achievements" lines={['Progress,', 'not just', 'promises.']}>
      <Reveal as="ul" stagger className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
        {achievements.map((a, i) => (
          <li key={a.label} onMouseMove={spot} style={{ '--i': i }} className="card spot bg-paper px-4 py-3.5">
            <p className="font-display text-xl font-semibold leading-tight"><CountUp value={a.value} /></p>
            <p className="mt-1 text-xs leading-snug text-muted">{a.label}</p>
          </li>
        ))}
      </Reveal>
      <p className="mt-4 font-mono text-[11px] text-muted">Ratings are snapshots recorded in my resume and may have changed since.</p>
    </Shell>
  );
}
