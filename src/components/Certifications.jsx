import React, { useState } from 'react'
import cert1 from '../assets/certificate.png'
const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "MERN Stack",
      date: "2023",
      description: "Comprehensive training in MongoDB, Express.js, React.js, and Node.js",
      image: cert1
    },
    
    
  ];

  const achievements = [
    {
      title: " Problem Solver",
      description: "Solved over 200+ programming problems on LeetCode and other platforms",
      date: "2023",
      category: "Programming",
      link: "https://leetcode.com/u/pranayb/"
    },
    {
        title: "Hackathon Winner",
      description: "First place in college-level hackathon for innovative web solution",
      date: "2023",
      category: "Competition"
    },
   
  ];

  return (
    <div className="min-h-screen pt-20 mb-5 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 underline underline-offset-5 decoration-4 decoration-white-500">
          Certifications & Achievements
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Professional certifications and notable achievements in my journey
        </p>

        {/* Certifications Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-zinc-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{cert.title}</h3>
                  <p className="text-gray-300 mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 mb-4">{cert.date}</p>
                  <p className="text-gray-300">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                  <span className="px-3 py-1 text-sm bg-gradient-to-r from-[#ff56f6] via-[#b936ee] to-[#3bace2] text-white rounded-full">
                    {achievement.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{achievement.description}</p>
                <p className="text-gray-400 mb-4">{achievement.date}</p>
                {achievement.link && (
                  <a 
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-white rounded-lg hover:opacity-80 transition-all bg-gradient-to-r from-[#ff56f6] via-[#b936ee] to-[#3bace2] shadow-[0px_4.4px_107.2px_rgba(255,86,246,0.51)]"
                  >
                    View Profile
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 text-white rounded-xl hover:opacity-80 transition-all bg-gradient-to-r from-[#ff56f6] via-[#b936ee] to-[#3bace2] shadow-[0px_4.42184px_107.23px_rgba(255,86,246,0.51)]"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Certifications;