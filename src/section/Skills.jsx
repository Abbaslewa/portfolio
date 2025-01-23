import Card from '../components/Card';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaFigma, FaMobileAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiAdobe, SiMongodb, SiNodedotjs, SiMysql } from 'react-icons/si'; 

const SkillsDisplay = () => {
  const skills = [
    { name: 'HTML 5', icon: <FaHtml5 size={20} className="text-orange-600 transition-transform duration-300 hover:scale-125 hover:text-yellow-400" />, progress: 90 },
    { name: 'CSS 3', icon: <FaCss3Alt size={20} className="text-blue-600 transition-transform duration-300 hover:scale-125 hover:text-blue-400" />, progress: 80 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={20} className="text-blue-400 transition-transform duration-300 hover:scale-125 hover:text-teal-400" />, progress: 80 },
    { name: 'React', icon: <FaReact size={20} className="text-blue-300 transition-transform duration-300 hover:scale-125 hover:text-cyan-400" />, progress: 60 },
    { name: 'JavaScript', icon: <FaJsSquare size={20} className="text-yellow-400 transition-transform duration-300 hover:scale-125 hover:text-yellow-300" />, progress: 60 },
    { name: 'Figma', icon: <FaFigma size={20} className="text-pink-600 transition-transform duration-300 hover:scale-125 hover:text-pink-500" />, progress: 90 },
    { name: 'Adobe Photoshop', icon: <SiAdobe size={20} className="text-red-500 transition-transform duration-300 hover:scale-125 hover:text-red-400" />, progress: 60 },
    { name: 'Node.js', icon: <SiNodedotjs size={20} className="text-green-600 transition-transform duration-300 hover:scale-125 hover:text-green-500" />, progress: 60 }, 
    { name: 'MongoDB', icon: <SiMongodb size={20} className="text-green-500 transition-transform duration-300 hover:scale-125 hover:text-green-400" />, progress: 40 },  
    { name: 'Database', icon: <SiMysql size={20} className="text-blue-500 transition-transform duration-300 hover:scale-125 hover:text-blue-400" />, progress: 30 },    
    { name: 'Mobile Development', icon: <FaMobileAlt size={20} className="text-purple-600 transition-transform duration-300 hover:scale-125 hover:text-purple-500" />, progress: 50 },
    { name: 'GitHub', icon: <FaGithub size={20} className="text-black transition-transform duration-300 hover:scale-125 hover:text-gray-700" />, progress: 85 }, 
  ];

  return (
    <div id="skills" className="bg-gray-700 min-h-screen p-6 sm:p-12 lg:p-20 flex justify-center items-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl w-full">
        {skills.map((skill, index) => (
          <Card
            key={index}
            name={skill.name}
            icon={skill.icon}
            progress={skill.progress}
            className="text-sm"
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsDisplay;
