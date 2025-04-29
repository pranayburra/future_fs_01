import React from 'react'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import gmail from '../assets/gmail.svg'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col sm:flex-row justify-around items-center h-[calc(100vh-20vh)] px-4 sm:px-0'>
      <div className='flex flex-col gap-2 sm:gap-4 justify-center items-center sm:items-start'>
        <div>
          <div className='text-white text-lg sm:text-xl text-center sm:text-left'>Hello! I'm </div>
          <div className='text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r py-2 sm:py-4 from-[#ff56f6] via-[#b936ee] to-[#3bace2] text-transparent bg-clip-text text-center sm:text-left'>Pranay Kumar Burra</div>
          <div className='text-white text-lg sm:text-xl py-1 sm:py-2 text-center sm:text-left'>Full Stack Developer & Computer Science Student</div>
          <div className='text-white text-base sm:text-lg w-full sm:w-[70%] text-center sm:text-left'>Building elegant solutions to complex problems with modern technologies.</div>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mt-2">
                    {['React', 'Node',  'Full Stack','JavaScript','Java',].map(skill => (
                        <div
                            key={skill}
                            className="inline-flex  items-center rounded-full border border-gray-400 px-5 py-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-white bg-white/10 backdrop-blur-sm"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
        <div className='flex flex-row gap-4 mt-4 sm:mt-0'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors'>Download CV</button>
          <button className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors' onClick={() => navigate('/contact')}>Contact Me</button>
          <div className='flex items-center'>
            <a 
              href="https://github.com/pranayburra" 
              target='_blank' 
              rel='noopener noreferrer'
              className='hover:opacity-80 transition-all duration-300 hover:scale-110 hover:rotate-[10deg]'
            >
              <img 
                src={github} 
                alt='GitHub' 
                className='w-8 h-8 invert' 
              />
            </a>
          </div>
          <div className='linkedin flex items-center'>
            <a 
              href="https://linkedin.com/in/pranayburra" 
              target='_blank' 
              rel='noopener noreferrer' 
              className='hover:opacity-80 transition-all duration-300 hover:scale-110 hover:rotate-[10deg]'
            >
              <img
                src={linkedin}
                alt='LinkedIn'
                className='w-8 h-8 invert'
              />
            </a>
          </div>
          <div className='gmail flex items-center'>
            <a 
              href="mailto:pranayburra007@gmail.com" 
              target='_blank' 
              rel='noopener noreferrer' 
              className='hover:opacity-80 transition-all duration-300 hover:scale-110 hover:rotate-[10deg]'
            >
              <img src={gmail} alt='Gmail' className='w-8 h-8 invert' />
            </a>
          </div>
        </div>
      </div>
      <div className='rightpart mt-8 sm:mt-0'>
        <div className='relative w-[35vh] h-[35vh] sm:w-[70vh] sm:h-[40vh]'>
          <div className='absolute inset-0 h-[103%] w-[103%] rounded-2xl bg-gradient-to-r from-[#ff56f6] via-[#b936ee] to-[#3bace2]'></div>
          <div className='circle rounded-2xl bg-[#0a0a0a] h-full w-full text-center text-white relative z-10 overflow-hidden p-6 shadow-2xl'>
            <div className='flex items-center gap-2 mb-4'>
              <div className='w-3 h-3 rounded-full bg-red-500'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
              <div className='w-3 h-3 rounded-full bg-green-500'></div>
              <div className='ml-auto text-sm text-gray-400'>developer.js</div>
            </div>
            <div className='text-left font-mono text-sm sm:text-md'>
              <div className='text-gray-400'>// Software Developer</div>
              <div className='text-gray-400'>// Software Engineer</div>
              <div className='mt-4'>
                <span className='text-blue-400'>const</span>
                <span className='text-yellow-400 px-3'>developer</span>
                <span className='text-white'>= {'{'}</span>
                <div className='ml-4'>
                  <span className='text-green-400'>name:</span>
                  <span className='text-orange-400'>'Pranay Kumar Burra',</span>
                </div>
                <div className='ml-4'>
                  <span className='text-green-400'>skills:</span>
                  <span className='text-orange-400'>['React', 'Node.js', 'Java'],</span>
                </div>
                <div className='ml-4'>
                  <span className='text-green-400'>focuses:</span>
                  <span className='text-orange-400'>['Full-Stack'],</span>
                </div>
                <div className='ml-4'>
                  <span className='text-green-400'>learning:</span>
                  <span className='text-orange-400'>'Always'</span>
                </div>
                <div className='text-white'>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home