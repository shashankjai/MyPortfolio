import { Code2, GraduationCap, Folder, Trophy, Brain, Shield, BookOpen, Network, Globe, Braces, Server, Database, Wrench, Library } from 'lucide-react';
const map = { code: Code2, grad: GraduationCap, folder: Folder, trophy: Trophy, brain: Brain, shield: Shield, book: BookOpen, network: Network, globe: Globe, braces: Braces, server: Server, db: Database, tools: Wrench, subjects: Library };
export default function Icon({ name, ...p }) { const C = map[name] || Code2; return <C aria-hidden="true" {...p} />; }
