import React from 'react'

const Card = ({ icon, invert, title,text }) => {
  return (
    <div className='w-full  sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[300px]'>
      <div className='card bg-[#2e1e43] text-start  p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full'>
        <div className='flex justify-between items-center gap-4'>
          <div className='w-16 h-16 flex items-center justify-center bg-black rounded-full'>
            <img 
              src={icon} 
              alt={title} 
              className={`w-10 h-10 ${invert ? 'invert' : ''}`}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className='text-lg font-medium'>Count</div>
        </div>
      <div className='text-xl font-semibold mt-4'>{title}</div>
        <div className='text-sm mt-2 text-gray-300'>{text}</div>
      </div>
    </div>
  )
}
export default Card