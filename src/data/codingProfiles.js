import { SiLeetcode, SiCodechef, SiCodeforces, SiGeeksforgeeks } from 'react-icons/si';
import { profile } from './profile';

// Ratings are snapshots recorded in the resume, not live values.
export const codingProfiles = [
  {
    name: 'LeetCode',
    icon: SiLeetcode,
    color: '#FFA116',
    rating: '1839',
    label: 'Current rating',
    note: 'Contest Rank 1681 (Weekly 504)',
    href: profile.links.leetcode || 'https://leetcode.com/',
  },
  {
    name: 'CodeChef',
    icon: SiCodechef,
    color: '#5B4638',
    rating: '3-Star',
    label: 'Current rating',
    note: 'Max rating 1629, Rank 338 (Starters 189)',
    href: profile.links.codechef || 'https://www.codechef.com/',
  },
  {
    name: 'Codeforces',
    icon: SiCodeforces,
    color: '#1F8ACB',
    rating: '1422',
    label: 'Current rating',
    note: 'Rank 1264 (Round 1050, Div. 4)',
    href: profile.links.codeforces || 'https://codeforces.com/',
  },
  {
    name: 'GeeksforGeeks',
    icon: SiGeeksforgeeks,
    color: '#2F8D46',
    rating: '1696',
    label: 'Current rating',
    note: '2000+ DSA problems solved overall',
    href: profile.links.geeksforgeeks || 'https://www.geeksforgeeks.org/',
  },
];
