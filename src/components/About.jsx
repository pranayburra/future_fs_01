import React from 'react'
import Card from './Card'
import twosidedarrow from '../assets/twosidedarrow.svg'
import world from '../assets/world.svg'
import medal from '../assets/medal.svg'
import profile from '../assets/bb9e7d82-159c-47cc-a473-27f4134b86e0.jpeg'
import resume from '../assets/resume.pdf'

const About = () => {
    const arr=[{element:twosidedarrow,invert:false,title:'Total Projects',text:'innovative web solutions'},
        {element:world,invert:false,title:'Certifications  ',text:'Professional skills validated  '},
        {element:medal,invert:true,title:'Years of Experience ',text:'Continous Learning Journey'} 
    ]
  return (
    <div className='flex flex-col justify-start w-full items-center pb-20 sm:w-full box-border'>
        <div className='w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-20 pb-20 sm:w-full box-border gap-8'>
            <div className='w-full sm:w-1/2'>

                <h1 className='text-4xl md:text-5xl font-bold mb-6 underline underline-offset-5 decoration-4 decoration-white-500 '>About Me</h1>
                <p className='w-full sm:w-[100%] max-w-3xl text-lg md:text-xl leading-relaxed mb-8 whitespace-normal break-words box-border '>
                    Hi! I'm B Pranay Kumar, a passionate and driven Computer Science undergraduate specializing in AI & ML. I enjoy building full-stack web applications and solving real-world problems through code. With a strong foundation in Java, JavaScript, and the MERN stack, I've developed projects ranging from student results portals to algorithm visualizers. I'm also an active problem solver on LeetCode, with over 200+ problems solved.

                    I thrive in collaborative environments, constantly seeking to learn new technologies and improve my skills. Whether it's contributing to team projects or creating user-friendly web apps, I'm committed to delivering clean, scalable, and efficient solutions.
                </p>
            </div>
           
            <div className="flex flex-col items-center justify-center w-full sm:w-[40%] gap-2 relative">
                <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden shadow-lg mb-2">
                    <img
                        src={profile}
                        alt="profile"
                        className="w-full h-full object-cover rounded-full"
                        loading="lazy"
                    />
                </div>
                <div className='text-2xl font-bold text-center'>Pranay Kumar Burra</div>
                <div className='text-center'>Software Engineering student</div>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                    {['React', 'Node',  'Full Stack'].map(skill => (
                        <div
                            key={skill}
                            className="inline-flex items-center rounded-full border border-gray-400 px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-white bg-white/10 backdrop-blur-sm"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
                <a
                    href={resume}
                    download
                    className="mt-4 px-6 py-2 text-white rounded-lg hover:opacity-80 transition-all bg-gradient-to-r from-[#ff56f6] via-[#b936ee] to-[#3bace2] shadow-[0px_4.4px_107.2px_rgba(255,86,246,0.51)] font-semibold"
                >
                    Download Resume
                </a>
            </div>
        </div>

        <div className='buttons flex gap-4 mb-12'>
            <button className='px-8 py-4 text-white rounded-xl hover:opacity-30 hover:cursor-pointer transition-all bg-gradient-to-r from-[#ff56f6] via-[#b936ee] to-[#3bace2] shadow-[0px_4.42184px_107.23px_rgba(255,86,246,0.51)]'>Download CV</button>
            <button className='px-8 py-4 text-white rounded-xl hover:opacity-30 hover:cursor-pointer transition-all bg-gradient-to-r from-[#ff56f6] via-[#b936ee] to-[#3bace2] shadow-[0px_4.42184px_107.23px_rgba(255,86,246,0.51)]'>View Projects</button>
        </div>
        <div className='cards grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 w-[70vw] max-w-7xl mx-auto'>
            {arr.map((element,index) => (
                <Card key={index} icon={element.element} invert={element.invert} title={element.title} text={element.text}/>
            ))}
        </div>
    </div>
  )
}

export default About