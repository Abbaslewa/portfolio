import { useState } from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <header className="bg-blue-950 text-white shadow-lg fixed top-0 left-0 right-0 w-full z-50">
      <nav className="flex items-center justify-between h-[60px] px-5 md:px-10">
        <img
          src={logo}
          alt="logo"
          className="w-[150px] h-auto object-contain rounded-full"
        />

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
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
        </ul>
      </nav>

      {isMenuOpen && (
        <ul className="flex flex-col items-center bg-blue-900 absolute top-[60px] left-0 right-0 py-4 space-y-4 md:hidden">
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
        </ul>
      )}
    </header>
  );
};

export default Navbar;





