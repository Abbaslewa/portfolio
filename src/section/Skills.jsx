import { Code, FileCode, GitBranch, Figma, Atom } from 'lucide-react';
import Card from '../components/Card';
import { FaHtml5, FaCss3 } from 'react-icons/fa';

const Skills = () => {
  const skillss = [
    { skillsName: 'JavaScript', text: 'Advanced', buttonColor: 'bg-blue-500 hover:bg-blue-900', icons: <FileCode className='group-hover:text-red-500 transition-all transform duration-300 scale-100 hover:scale-110' /> }, 
    { skillsName: 'React', text: 'Intermediate', buttonColor: 'bg-yellow-500 hover:bg-yellow-900', icons: <Atom className='group-hover:text-red-500 transition-all transform duration-300 scale-100 hover:scale-110' /> },
    { skillsName: 'HTML', text: 'Advanced', buttonColor: 'bg-pink-500 hover:bg-pink-700', icons: <FaHtml5 className='group-hover:text-red-500 transition-all transform duration-300 scale-100 hover:scale-110' /> },
    { skillsName: 'CSS', text: 'Intermediate', buttonColor: 'bg-green-500 hover:bg-green-800', icons: <FaCss3 className='group-hover:text-red-500 transition-all transform duration-300 scale-100 hover:scale-110' /> },
    { skillsName: 'PHP', text: 'Beginner', buttonColor: 'bg-indigo-500 hover:bg-indigo-800', icons: <Atom className='group-hover:text-red-500 transition-all transform duration-300 scale-100 hover:scale-110' /> },
    { skillsName: 'Git', text: 'Advanced', buttonColor: 'bg-purple-500 hover:bg-purple-300', icons: <GitBranch className='group-hover:text-red-500 transition-all transform duration-300 scale-100 hover:scale-110' /> },
    { skillsName: 'TailwindCSS', text: 'Intermediate', buttonColor: 'bg-teal-500 hover:bg-teal-900', icons: <Code className='group-hover:text-red-500 transition-all transform duration-300 scale-100 hover:scale-110' /> },
    { skillsName: 'Figma', text: 'Advanced', buttonColor: 'bg-orange-500 hover:bg-orange-800', icons: <Figma className='group-hover:text-red-500 transition-all transform duration-300 scale-100 hover:scale-110' /> },
  ];

  const Skillslist = skillss.map((skill, index) => (
    <Card
      key={index}
      skillsName={skill.skillsName}
      text={skill.text}
      buttonColor={skill.buttonColor}
      icons={skill.icons}
    />
  ));

  return (
    <div id="skills" className="min-h-screen py-10 bg-gradient-to-r from-gray-900 via-blue-900 to-black">
      <div className="md:w-[90%] mx-auto p-20 rounded-lg bg-gray-500 shadow-lg shadow-gray-700">
        <h2 className="text-5xl text-center text-white font-bold mb-10 animate-fadeIn">My Skills</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {Skillslist}
        </div>
      </div>
    </div>
  );
};

export default Skills;
