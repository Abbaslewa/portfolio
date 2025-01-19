import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiFillCode } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-950 text-white shadow-[0_4px_10px_rgba(0,0,0,0.4)] fixed top-0 left-0 right-0 w-full z-50">
      <nav className="flex items-center justify-between h-[70px] px-5 md:px-10">
        
        <div className="text-2xl font-bold flex items-center space-x-2">
          <AiFillCode className="text-green-400" /> 
          <a href="#home" className="text-white hover:text-green-400">
            (A)
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 md:space-x-12 text-lg">
          <li>
            <a
              href="#home"
              className="hover:text-red-500 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-red-500 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              ABOUT ME
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-red-500 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-red-500 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              CONTACT ME
            </a>
          </li>
         
          <li>
        
          </li>
        </ul>
      </nav>

      {isMenuOpen && (
        <ul className="flex flex-col items-center bg-blue-900 absolute top-[70px] left-0 right-0 py-4 space-y-4 shadow-[0_8px_20px_rgba(0,0,0,0.4)] md:hidden">
          <li>
            <a
              href="#home"
              className="hover:text-red-500 transition-all duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-red-500 transition-all duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT ME
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-red-500 transition-all duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-red-500 transition-all duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT ME
            </a>
          </li>
       
          <li>
        
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
