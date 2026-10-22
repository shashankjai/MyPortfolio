import { Mail, FileText } from 'lucide-react';
import { SiGithub, SiX } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/profile';
import { resumeUrl } from './resume';

// Round icon buttons for social profiles, resume, and email.
const items = () => [
  { key: 'github', label: 'GitHub', Ico: SiGithub, href: profile.links.github, ext: true },
  { key: 'linkedin', label: 'LinkedIn', Ico: FaLinkedin, href: profile.links.linkedin || 'https://www.linkedin.com/', ext: true },
  { key: 'resume', label: 'Resume', Ico: FileText, href: resumeUrl, ext: true },
  { key: 'mail', label: 'Email', Ico: Mail, href: `mailto:${profile.email}` },
  { key: 'x', label: 'X (Twitter)', Ico: SiX, href: profile.links.twitter || 'https://x.com/', ext: true },
];

export default function HeroIcons({ className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-4 ${className}`}>
      {items().map(({ key, label, Ico, href, ext }, i) => (
        <li key={key} className="rise" style={{ animationDelay: `${380 + i * 70}ms` }}>
          <a href={href} className="icon-btn" title={label} aria-label={label}
            {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}><Ico size={24} /></a>
        </li>
      ))}
    </ul>
  );
}
