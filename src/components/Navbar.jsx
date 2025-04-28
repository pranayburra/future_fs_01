import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='fixed  top-0 left-0 right-0 z-50 w-full box-border backdrop-blur-lg shadow-md'>
      <div className='flex justify-between items-center max-w-7xl mx-auto p-2 sm:p-4 box-border'>
        <div className='text-xl sm:text-2xl font-bold'>
          <NavLink to="/" className="font-bold box-border text-[16px] sm:text-[20px] hover:text-gray-300 transition-colors whitespace-nowrap">Pranay Kumar Burra</NavLink>
        </div>
        <div className='flex justify-around w-[50%] bg-gradient-to-r from-[#ff56f6]/20 via-[#b936ee]/20 to-[#3bace2]/20 backdrop-blur-md rounded-full p-3 sm:p-5 items-center gap-2 sm:gap-4 invisible sm:visible'>
          <NavLink to="/" className="font-medium text-[12px] sm:text-[14px] relative text-white after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#ff56f6] after:via-[#b936ee] after:to-[#3bace2] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff56f6] hover:via-[#b936ee] hover:to-[#3bace2] transition-all duration-300">Home</NavLink>
          <NavLink to="/about" className="font-medium text-[12px] sm:text-[14px] relative text-white after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#ff56f6] after:via-[#b936ee] after:to-[#3bace2] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff56f6] hover:via-[#b936ee] hover:to-[#3bace2] transition-all duration-300">About</NavLink>
          <NavLink to="/Projects" className="font-medium text-[12px] sm:text-[14px] relative text-white after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#ff56f6] after:via-[#b936ee] after:to-[#3bace2] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff56f6] hover:via-[#b936ee] hover:to-[#3bace2] transition-all duration-300">Projects</NavLink>
          <NavLink to="/Skills" className="font-medium text-[12px] sm:text-[14px] relative text-white after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#ff56f6] after:via-[#b936ee] after:to-[#3bace2] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff56f6] hover:via-[#b936ee] hover:to-[#3bace2] transition-all duration-300">Skills</NavLink>
           <NavLink to="/Certifications" className="font-medium text-[12px] sm:text-[14px] relative text-white after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#ff56f6] after:via-[#b936ee] after:to-[#3bace2] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff56f6] hover:via-[#b936ee] hover:to-[#3bace2] transition-all duration-300">Certifications</NavLink> 
          <NavLink to="/contact" className="font-medium text-[12px] sm:text-[14px] relative text-white after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#ff56f6] after:via-[#b936ee] after:to-[#3bace2] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff56f6] hover:via-[#b936ee] hover:to-[#3bace2] transition-all duration-300">Contact</NavLink>
        </div>
        <div className='sm:hidden'>
          <span
            className="material-symbols-outlined text-xl sm:text-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            menu
          </span>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='sm:hidden absolute top-full right-0 bg-zinc-900/95 rounded-2xl w-[60%] mx-auto backdrop-blur-lg p-4 flex flex-col gap-4 items-center'>
            <NavLink 
              to="/" 
              className="font-medium text-[16px] relative text-white after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#ff56f6] after:via-[#b936ee] after:to-[#3bace2] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff56f6] hover:via-[#b936ee] hover:to-[#3bace2] transition-all duration-300 w-full text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className="font-medium text-[16px] relative text-white after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#ff56f6] after:via-[#b936ee] after:to-[#3bace2] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff56f6] hover:via-[#b936ee] hover:to-[#3bace2] transition-all duration-300 w-full text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/Projects" 
              className="font-medium text-[16px] relative text-white after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#ff56f6] after:via-[#b936ee] after:to-[#3bace2] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff56f6] hover:via-[#b936ee] hover:to-[#3bace2] transition-all duration-300 w-full text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink to="/Certifications" className="font-medium text-[16px] relative text-white after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#ff56f6] after:via-[#b936ee] after:to-[#3bace2] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff56f6] hover:via-[#b936ee] hover:to-[#3bace2] transition-all duration-300 w-full text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Certifications
            </NavLink>
            <NavLink 
              to="/contact" 
              className="font-medium text-[16px] relative text-white after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#ff56f6] after:via-[#b936ee] after:to-[#3bace2] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff56f6] hover:via-[#b936ee] hover:to-[#3bace2] transition-all duration-300 w-full text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>


    </nav>
  )
}

export default Navbar;