import { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import Shell from './Shell';
import { profile } from '../data/profile';

const labels = { github: 'GitHub', linkedin: 'LinkedIn', leetcode: 'LeetCode', codechef: 'CodeChef', codeforces: 'Codeforces', geeksforgeeks: 'GeeksforGeeks', twitter: 'Twitter' };

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { window.location.href = `mailto:${profile.email}`; }
  };
  const links = Object.entries(profile.links).filter(([key, url]) => (
    url && !['leetcode', 'codechef', 'codeforces', 'geeksforgeeks'].includes(key)
  ));
  return (
    <Shell id="contact" lines={['Have an idea?', 'Let’s talk.']}>
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <p className="max-w-md text-[15px] leading-relaxed text-muted">I’m always interested in discussing interesting engineering challenges, thoughtful products, and opportunities to build something useful.</p>
        <div className="flex flex-col gap-3 sm:items-start">
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-dark rounded-full"><Mail size={16} /> Mail Me</a>
            {links.map(([k, u]) => <a key={k} href={u} target="_blank" rel="noopener noreferrer" className="btn btn-light rounded-full">{labels[k]}</a>)}
          </div>
          <button type="button" onClick={copy} className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-brand" aria-live="polite">
            {profile.email}
            <span className="flex h-6 w-6 items-center justify-center rounded border border-line transition-colors group-hover:border-brand">{copied ? <Check size={13} className="text-brand" /> : <Copy size={13} />}</span>
            <span className={`text-xs text-brand transition-opacity ${copied ? 'opacity-100' : 'opacity-0'}`}>Copied!</span>
          </button>
        </div>
      </div>
    </Shell>
  );
}
