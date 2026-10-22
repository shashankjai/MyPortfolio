import { GraduationCap, MapPin } from 'lucide-react';
import Shell from './Shell';
import { spot } from './spot';
import { profile } from '../data/profile';

export default function AboutSection() {
  const ed = profile.education;
  return (
    <Shell id="about" lines={['A little', 'about me.']}>
      <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
        <div><p className="text-[15px] leading-[1.8] text-muted sm:text-base">
          I’m a software developer who enjoys solving challenging problems and building products that are useful in the real world. My interests span full-stack development, AI-powered applications, competitive programming, and systems-oriented projects. I am always eager to learn new technologies and turn ideas into impactful, scalable solutions.
        </p>
        <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-brand hover:text-brand"><MapPin size={15} className="text-brand" aria-hidden="true" />{profile.location}</p></div>
        <div onMouseMove={spot} className="card spot flex gap-4 bg-tint p-5">
          <GraduationCap size={34} strokeWidth={1.5} className="shrink-0 text-brand" aria-hidden="true" />
          <div className="text-sm">
            <h3 className="text-base font-semibold">{ed.school}</h3>
            <p className="mt-1 text-muted">{ed.degree}</p>
            <p className="text-muted">{ed.period}</p>
            <p className="mt-1 font-medium">CGPA: {ed.cgpa}</p>
          </div>
        </div>
      </div>
    </Shell>
  );
}
