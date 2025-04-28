import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: "https://abhishekganvir.vercel.app/java.svg" },
        { name: "JavaScript", icon: "https://abhishekganvir.vercel.app/javascript.svg" },
        { name: "Python", icon: "https://abhishekganvir.vercel.app/python.svg" },
        { name: "HTML/CSS", icon: "https://abhishekganvir.vercel.app/html.svg" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: "https://abhishekganvir.vercel.app/react.svg" },
        { name: "Tailwind CSS", icon: "https://abhishekganvir.vercel.app/tailwind.svg" },
        { name: "Redux", icon: "https://abhishekganvir.vercel.app/redux.svg" },
        { name: "Material-UI", icon: "https://abhishekganvir.vercel.app/materialui.svg" },
        { name: "Responsive Design", icon: "https://abhishekganvir.vercel.app/responsive.svg" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "https://abhishekganvir.vercel.app/nodejs.svg" },
        { name: "Express.js", icon: "https://abhishekganvir.vercel.app/express.svg" },
        { name: "MongoDB", icon: "https://abhishekganvir.vercel.app/mongodb.svg" },
        { name: "REST APIs", icon: "https://abhishekganvir.vercel.app/api.svg" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", icon: "https://abhishekganvir.vercel.app/git.svg" },
        { name: "VS Code", icon: "https://abhishekganvir.vercel.app/vscode.svg" },
        { name: "Postman", icon: "https://abhishekganvir.vercel.app/postman.svg" }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 mb-5 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 underline underline-offset-5 decoration-4 decoration-white-500">
          Skills
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Technical skills and expertise I've developed through my journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 text-white">{category.title}</h2>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-4 py-2 text-white rounded-full bg-gradient-to-r from-[#ff56f6] via-[#b936ee] to-[#3bace2] shadow-[0px_4.4px_107.2px_rgba(255,86,246,0.51)] flex items-center gap-2"
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-5 h-5"
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills;