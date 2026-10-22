import { socialEntries } from '../data/profile';
const labels = { github: 'GitHub', linkedin: 'LinkedIn', leetcode: 'LeetCode', codechef: 'CodeChef', codeforces: 'Codeforces', geeksforgeeks: 'GFG', twitter: 'X' };
export default function SocialLinks({ className = '' }) {
  const entries = socialEntries();
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-2 ${className}`}>
      {entries.map(([key, url]) => (
        <li key={key}><a href={url} target="_blank" rel="noopener noreferrer" className="text-[13px] text-muted transition-colors hover:text-brand">{labels[key]}</a></li>
      ))}
    </ul>
  );
}
