import { skillIcons } from '../data/skillIcons';
const names = ['C++', 'Python', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'FastAPI', 'Tailwind CSS', 'Socket.IO', 'Vite', 'Git', 'GitHub', 'Postman', 'Scikit-learn', 'Pandas', 'NumPy', 'Google Gemini API'];
// Decorative strip, hidden from assistive tech. Pauses on hover.
export default function TechMarquee() {
  const row = names.map((n) => { const [Ico, color] = skillIcons[n]; return { n, Ico, color }; });
  return (
    <div aria-hidden="true" className="marquee border-b border-line bg-paper py-5">
      <div className="marquee-track">
        {[...row, ...row].map(({ n, Ico, color }, i) => (
          <span key={i} className="mr-10 flex shrink-0 items-center gap-2.5 text-sm text-muted"><Ico size={22} color={color} />{n}</span>
        ))}
      </div>
    </div>
  );
}
