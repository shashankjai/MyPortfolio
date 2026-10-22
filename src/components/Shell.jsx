import Reveal from './Reveal';
const nums = { about: '01', projects: '02', skills: '03', coding: '04', achievements: '05', experience: '06', contact: '07' };
// Section layout from the design: heading on the left, content on the right.
export default function Shell({ id, lines, children, alt = false }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`border-b border-line ${alt ? 'bg-alt' : ''}`}>
      <Reveal className="mx-auto grid w-full max-w-[1600px] gap-8 px-5 py-14 sm:px-8 lg:px-12 xl:px-16 md:py-16 lg:grid-cols-[250px_1fr] lg:gap-10">
        <h2 id={`${id}-title`} className="relative self-start font-display font-semibold leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2rem, 3.4vw, 3.25rem)" }}>
          <span aria-hidden="true" className="label mb-3 block text-[11px]">{nums[id]} / {id}</span>
          {lines.map((l) => <span key={l} className="block">{l}</span>)}
          <span className="bar-grow mt-4 block h-[3px] w-12 rounded-full bg-brand" />
          <svg className="absolute -right-5 top-1 hidden text-brand lg:block" width="18" height="22" viewBox="0 0 18 22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10 2l3 6M3 9l5 3" /></svg>
        </h2>
        <div className="min-w-0">{children}</div>
      </Reveal>
    </section>
  );
}
