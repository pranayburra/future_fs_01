import React, { useState } from 'react'

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    
    {
      title: "Algorithm Visualizer",
      description: "Interactive visualization of sorting and searching algorithms with step-by-step execution.",
      technologies: ["React", "JavaScript", "CSS"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with user authentication and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Tailwind CSS.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      image: "https://via.placeholder.com/300x200"
    },
   
    {
      title: "Weather Dashboard",
      description: "A weather dashboard showing current and forecasted weather conditions.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      image: "https://via.placeholder.com/300x200"
    },{
        title: "Student Results Portal",
        description: "A full-stack web application for managing and viewing student results with admin dashboard.",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "https://via.placeholder.com/300x200"
      }
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <div className="min-h-screen pt-20 mb-5 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 underline underline-offset-5 decoration-4 decoration-white-500">
          Projects
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Here are some projects I have worked on
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <div key={index} className="bg-zinc-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-[#ff56f6] via-[#b936ee] to-[#3bace2] text-white rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 text-white rounded-xl hover:opacity-80 transition-all bg-gradient-to-r from-[#ff56f6] via-[#b936ee] to-[#3bace2] shadow-[0px_4.42184px_107.23px_rgba(255,86,246,0.51)]"
          >
            {showAll ? "Show Less" : "Show More Projects"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects;