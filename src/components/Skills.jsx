import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaGit } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      name: 'HTML5',
      icon: FaHtml5,
    },
    {
      name: 'CSS3',
      icon: FaCss3Alt,
    },
    {
      name: 'JavaScript',
      icon: FaJs,
    },
    {
      name: 'React',
      icon: FaReact,
    },
    {
      name: 'Node.js',
      icon: FaNode,
    },
    {
      name: 'Express',
      icon: SiExpress,
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
    },
    {
      name: 'Git',
      icon: FaGit,
    },
    {
      name: 'SQL',
      icon: FaDatabase,
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16 underline underline-offset-8 decoration-4 decoration-[#b936ee]">
        Skills & Technologies
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-4 group"
            >
              <div className={`
                p-8 rounded-2xl
                bg-white/5 backdrop-blur-sm
                border border-white/10
                hover:cursor-pointer
                transform transition-all duration-300
                group-hover:scale-110
                group-hover:bg-gradient-to-r 
                group-hover:from-[#ff56f6] group-hover:via-[#b936ee] group-hover:to-[#3bace2]
                relative overflow-hidden
                shadow-lg
              `}>
             
                <Icon className="w-16 h-16 text-white group-hover:text-white transition-colors" />
              </div>
              <span className="font-medium text-white text-lg tracking-wide">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>

      
       
     
    </div>
  )
}

export default Skills;