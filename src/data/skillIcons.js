import { SiCplusplus, SiPython, SiJavascript, SiReact, SiVite, SiTailwindcss, SiHtml5, SiNodedotjs, SiExpress, SiFastapi, SiSocketdotio, SiWebrtc, SiMongodb, SiJsonwebtokens, SiZod, SiScikitlearn, SiPandas, SiNumpy, SiGooglegemini, SiGit, SiGithub, SiPostman } from 'react-icons/si';
import { FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { LuPlug, LuSearch, LuBrainCircuit, LuShapes, LuChartColumn, LuBinary, LuBoxes, LuDatabase, LuNetwork, LuCpu } from 'react-icons/lu';

// skill name -> [icon component, brand color]
export const skillIcons = {
  'C++': [SiCplusplus, '#00599C'],
  Python: [SiPython, '#3776AB'],
  JavaScript: [SiJavascript, '#E8C500'],
  SQL: [FaDatabase, '#4479A1'],
  'React.js': [SiReact, '#0EA5C9'],
  Vite: [SiVite, '#646CFF'],
  'Tailwind CSS': [SiTailwindcss, '#06B6D4'],
  HTML: [SiHtml5, '#E34F26'],
  CSS: [FaCss3Alt, '#1572B6'],
  Recharts: [LuChartColumn, '#22B5BF'],
  'Node.js': [SiNodedotjs, '#5FA04E'],
  'Express.js': [SiExpress, '#111111'],
  FastAPI: [SiFastapi, '#009688'],
  'REST APIs': [LuPlug, '#2166F3'],
  'Socket.IO': [SiSocketdotio, '#111111'],
  WebRTC: [SiWebrtc, '#3C6EB4'],
  MongoDB: [SiMongodb, '#47A248'],
  'MongoDB Atlas Vector Search': [LuSearch, '#13AA52'],
  JWT: [SiJsonwebtokens, '#D63AFF'],
  Zod: [SiZod, '#3E67B1'],
  'Scikit-learn': [SiScikitlearn, '#F7931E'],
  Pandas: [SiPandas, '#150458'],
  NumPy: [SiNumpy, '#4D77CF'],
  'Retrieval-Augmented Generation (RAG)': [LuBrainCircuit, '#2166F3'],
  'Google Gemini API': [SiGooglegemini, '#8E75B2'],
  Embeddings: [LuShapes, '#2166F3'],
  'VS Code': [VscVscode, '#007ACC'],
  Git: [SiGit, '#F05032'],
  GitHub: [SiGithub, '#181717'],
  Postman: [SiPostman, '#FF6C37'],
  'Data Structures and Algorithms': [LuBinary, '#2166F3'],
  'Object-Oriented Programming': [LuBoxes, '#2166F3'],
  'Database Management Systems': [LuDatabase, '#2166F3'],
  'Computer Networks': [LuNetwork, '#2166F3'],
  'Operating Systems': [LuCpu, '#2166F3'],
};
