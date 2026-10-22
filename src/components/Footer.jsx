import { ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { navItems, profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-5 px-5 py-8 sm:px-8 lg:px-12 xl:px-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3"><Logo className="text-3xl" /><div><p className="text-sm font-semibold">{profile.name}</p><p className="text-xs text-muted">{profile.role}</p></div></div>
        <nav aria-label="Footer"><ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">{navItems.map((n) => <li key={n}><a className="hover:text-brand" href={`#${n.toLowerCase()}`}>{n}</a></li>)}</ul></nav>
        <a href="#home" aria-label="Back to top" className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-brand hover:text-brand"><ArrowUp size={16} /></a>
      </div>
      <p className="px-5 pb-6 text-center text-xs text-muted lg:text-right lg:pr-12 xl:pr-16">© {new Date().getFullYear()} {profile.name}. Designed with care. Built with code.</p>
    </footer>
  );
}
