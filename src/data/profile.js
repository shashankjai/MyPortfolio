// Set a link to a real URL to show it; leave as null to hide it everywhere.
export const profile = {
  name: 'Shashank Jaiswal',
  role: 'Full-Stack Developer',
  email: 'shashank3021195@gmail.com',
  location: 'Raipur, Chhattisgarh, India',
  links: {
    github: 'https://github.com/shashankjai',
    linkedin: 'https://www.linkedin.com/in/shashank-jaiswal-203b15289',
    leetcode: 'https://leetcode.com/u/shashank_jais02016/',
    codechef: 'https://www.codechef.com/users/jaisabcd',
    codeforces: 'https://codeforces.com/profile/sj02012006',
    geeksforgeeks: 'https://www.geeksforgeeks.org/profile/shashankcjy4',
    twitter: 'https://x.com/Shashank_jais07',
  },
  education: { school: 'National Institute of Technology Raipur', degree: 'B.Tech in Information Technology', period: '2023 – 2027 (Expected)', cgpa: '9.15/10' },
  stats: [
    { icon: 'code', value: '2000+', label: 'DSA Problems Solved' },
    { icon: 'grad', value: '9.15/10', label: 'CGPA (NIT Raipur)' },
    { icon: 'folder', value: '4', label: 'Featured Projects' },
    { icon: 'trophy', value: '2nd Runner-Up', label: 'Xcelerate 2026, IIIT Naya Raipur' },
  ],
};
export const navItems = ['Home', 'About', 'Projects', 'Skills', 'Coding', 'Achievements', 'Experience', 'Contact'];

// Every platform always shows. Until you set your own URL above, it links to the platform's home page.
const homes = { github: 'https://github.com/', linkedin: 'https://www.linkedin.com/', twitter: 'https://x.com/', leetcode: 'https://leetcode.com/', codechef: 'https://www.codechef.com/', codeforces: 'https://codeforces.com/', geeksforgeeks: 'https://www.geeksforgeeks.org/' };
export const socialEntries = () => Object.keys(homes).map((k) => [k, profile.links[k] || homes[k]]);
