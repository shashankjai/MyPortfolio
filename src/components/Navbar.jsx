import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { navItems } from '../data/profile';
import useActiveSection from '../hooks/useActiveSection';

const ids = navItems.map((n) => n.toLowerCase());

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const active = useActiveSection(ids);
  return (
    <header className={`sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm transition-shadow duration-300 ${scrolled ? 'shadow-[0_6px_18px_-14px_rgba(0,0,0,.35)]' : ''}`}>
      <nav className="mx-auto flex h-[72px] w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16" aria-label="Main">
        <a href="#home" aria-label="Home"><Logo /></a>
        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((n) => {
            const id = n.toLowerCase();
            return (
              <li key={n}>
                <a href={`#${id}`} aria-current={active === id ? 'page' : undefined}
                  className={`relative py-2 text-[15px] transition-colors hover:text-brand ${active === id ? 'text-ink' : 'text-muted'} after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-brand after:transition-all after:duration-300 ${active === id ? 'after:w-full' : 'after:w-0'}`}>
                  {n}
                </a>
              </li>
            );
          })}
        </ul>
        <a href="#contact" className="btn btn-dark hidden lg:inline-flex">Let’s Talk</a>
        <button className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line lg:hidden"
          onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="menu-drop border-t border-line bg-paper px-5 pb-5 lg:hidden">
          <ul className="flex flex-col">
            {navItems.map((n) => (
              <li key={n} className="border-b border-line">
                <a href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}
                  className={`block py-3.5 text-base ${active === n.toLowerCase() ? 'font-medium text-brand' : 'text-ink'}`}>{n}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-dark mt-4 w-full justify-center">Let’s Talk</a>
        </div>
      )}
    </header>
  );
}
