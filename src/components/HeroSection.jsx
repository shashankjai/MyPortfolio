import { profile } from '../data/profile';
import HeroIcons from './HeroIcons';
import Icon from './Icon';
import CountUp from './CountUp';
import Typewriter from './Typewriter';

export default function HeroSection() {
  return (
    <section id="home" aria-labelledby="hero-title" className="dot-grid relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="blob left-[-6rem] top-10 h-72 w-72 bg-brand/25" />
      <div aria-hidden="true" className="blob blob-b right-[-4rem] top-40 h-80 w-80 bg-[#7C9CFF]/30" />
      <div className="relative mx-auto grid w-full max-w-[1600px] items-center gap-6 px-5 pt-10 sm:px-8 lg:px-12 xl:px-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-4 lg:pt-8">
        <div className="max-w-2xl py-4 lg:py-10">
          <p className="rise flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em]"><span className="h-2 w-2 animate-pulse rounded-full bg-brand" /><Typewriter words={['Full-Stack Developer', 'AI / ML Builder', 'Competitive Programmer', 'Problem Solver']} /></p>
          <h1 id="hero-title" className="rise mt-4 font-display font-semibold leading-[1.04] tracking-tight" style={{ fontSize: 'clamp(2.75rem, 5.2vw, 6rem)', animationDelay: '80ms' }}>
            <span className="block text-ink">Hi, I’m</span>
            <span className="relative mt-1 inline-block">
              <span className="shimmer">Shashank</span> <span className="text-ink">Jaiswal</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 14" preserveAspectRatio="none" height="12" aria-hidden="true"><path className="draw" pathLength="1" d="M3 9C60 3 120 12 180 7S260 5 297 8" fill="none" stroke="#2166F3" strokeWidth="4" strokeLinecap="round" /></svg>
            </span>
          </h1>
          <p className="rise mt-8 font-display text-xl font-medium text-ink sm:text-2xl" style={{ animationDelay: '200ms' }}>
            I build products that solve real <span className="underline decoration-brand decoration-[3px] underline-offset-4">problems.</span>
          </p>
          <p className="rise mt-4 max-w-xl text-base leading-relaxed text-muted xl:text-lg" style={{ animationDelay: '280ms' }}>
            I’m a final-year B.Tech Information Technology student at NIT Raipur, passionate about full-stack development, AI/ML, and competitive programming. I enjoy turning ideas into practical, scalable products.
          </p>
          <HeroIcons className="mt-8" />
        </div>
        <img
          src="/images/hero-developer.png" width="1672" height="941" fetchpriority="high"
          alt="Illustration of a developer in a blue hoodie thinking at a laptop, with a code window, a checklist, stacked books, a coffee cup and a sleeping cat"
          className="fade block h-auto w-full select-none mix-blend-multiply lg:-mr-12 lg:w-[calc(100%+3rem)] xl:-mr-16 xl:w-[calc(100%+4rem)] lg:max-w-none"
        />
      </div>
      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <dl className="grid grid-cols-2 gap-y-6 border-t border-ink py-6 lg:grid-cols-4 lg:divide-x lg:divide-line">
          {profile.stats.map((s, i) => (
            <div key={s.label} style={{ animationDelay: `${600 + i * 90}ms` }} className="rise flex items-center gap-3 lg:justify-center lg:px-4">
              <Icon name={s.icon} size={30} strokeWidth={1.5} className="shrink-0 text-brand" />
              <div><dd className="font-display text-xl font-semibold leading-tight sm:text-2xl"><CountUp value={s.value} /></dd><dt className="text-xs text-muted sm:text-[13px]">{s.label}</dt></div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
