import { FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { FaDownload, FaBehance, FaInstagram, FaLinkedin, FaMoon } from 'react-icons/fa';
import ew from "../assets/ew.png";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main
      id="home"
      className={`relative flex flex-col md:flex-row-reverse items-center justify-center w-full min-h-screen py-12 px-4 sm:px-6 md:px-16 lg:px-24 ${
        darkMode ? 'bg-black' : 'bg-gray-700'
      }`}
    >
      <nav
        className={`fixed top-0 left-0 w-full py-4 flex justify-between items-center px-4 sm:px-8 z-20 transition-all duration-300 ${
          isScrolled ? 'bg-black bg-opacity-80 shadow-lg' : 'bg-transparent'
        }`}
      >
        <p className="text-white text-yellow-600 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
          LOGO
        </p>

        <div className="md:hidden">
          {isMenuOpen ? (
            <FaTimes className="text-2xl text-white cursor-pointer" onClick={toggleMenu} />
          ) : (
            <FaBars className="text-2xl text-white cursor-pointer" onClick={toggleMenu} />
          )}
        </div>

        <div className="hidden md:flex space-x-6 lg:space-x-16 text-white">
          <a href="#home" className="text-base sm:text-lg font-semibold hover:text-gray-400 transition-all duration-300">Home</a>
          <a href="#about" className="text-base sm:text-lg font-semibold hover:text-gray-400 transition-all duration-300">About Me</a>
          <a href="#skills" className="text-base sm:text-lg font-semibold hover:text-gray-400 transition-all duration-300">Skills</a>
          <a href="#projects" className="text-base sm:text-lg font-semibold hover:text-gray-400 transition-all duration-300">Contact Me</a>
          <a href="#contact" className="text-base sm:text-lg font-semibold bg-gradient-to-r from-yellow-500 to-red-500 hover:text-gray-400 bg-yellow-600 px-4 sm:px-5 py-1 rounded-lg transition-all duration-300">Hire Me</a>
        </div>

        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col justify-center items-center md:hidden">
            <a href="#home" className="text-3xl text-white my-4" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-3xl text-white my-4" onClick={toggleMenu}>About Me</a>
            <a href="#skills" className="text-3xl text-white my-4" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="text-3xl text-white my-4" onClick={toggleMenu}>Contact Me</a>
            <a href="#contact" className="text-3xl text-white my-4" onClick={toggleMenu}>Hire Me</a>
          </div>
        )}
      </nav>

      <div className="relative top-10 z-10 md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] p-4 md:p-6 bg-gray-700 rounded-lg shadow-xl transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-3">
          <img
            src={ew}
            alt="Abbas"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-125"
          />
        </div>
      </div>

      <div className="relative z-10 md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4 sm:space-y-6 px-4 sm:px-6 md:px-10">
        <h1 className="text-xl sm:text-3xl p-3 rounded-lg font-extrabold text-gray-400">Hi, I'm Abbas Omer</h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl p-3 font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">I'm a full-stack developer, and I love what I do.</p>

        <div className="flex space-x-4">
          <a
            href="#contact"
            className="relative inline-block px-4 sm:px-6 py-2 text-white font-semibold bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-[0_0_20px_#00FFAA] duration-500"
            aria-label="Hire Abbas"
          >
            Hire Me
          </a>
          <a
            href="Abbas_CVF.pdf"
            download="Abbas_CVF.pdf"
            className="hidden md:block bg-black hover:bg-gray-800 outline-2 border border-white text-white px-4 py-2 rounded-lg shadow-xl backdrop-blur-md bg-opacity-30 hover:scale-105 transition-all duration-300 ease-in-out"
            aria-label="Download Abbas's Resume"
          >
            <FaDownload className="inline mr-2" />
            Download CV
          </a>
        </div>

        <div className="md:hidden flex justify-center mt-4">
          <a
            href="Abbas_CVF.pdf"
            download="Abbas_CVF.pdf"
            className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-300 ease-in-out flex items-center animate-bounce"
            aria-label="Download Abbas's Resume"
          >
            <FaDownload className="inline mr-2" />
            Download CV
          </a>
        </div>

        <div className="flex justify-center md:justify-start space-x-6 mt-6">
          <a href="https://www.behance.net" target="_blank" rel="noreferrer" className="text-white text-2xl hover:text-gray-500 transition-all">
            <FaBehance />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-white text-2xl hover:text-gray-500 transition-all">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-white text-2xl hover:text-gray-500 transition-all">
            <FaLinkedin />
          </a>
        </div>

        <div className="flex flex-col md:flex-row mt-6 space-y-4 md:space-y-0 md:space-x-8">
          <div className="text-center bg-white bg-opacity-10 text-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">1+</h3>
            <p className="text-sm">Years Experience</p>
          </div>
          <div className="text-center bg-white bg-opacity-10 text-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">10+</h3>
            <p className="text-sm">Projects Done</p>
          </div>
          <div className="text-center bg-white bg-opacity-10 text-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">10+</h3>
            <p className="text-sm">Happy Clients</p>
          </div>
        </div>
      </div>

      <button
        onClick={toggleDarkMode}
        className={`absolute bottom-6 right-6 text-white rounded-full w-12 h-12 flex items-center justify-center ${
          darkMode ? 'bg-white text-black' : 'bg-gray-900'
        } shadow-xl transition-colors`}
      >
        <FaMoon className="text-xl" />
      </button>
    </main>
  );
};

export default Hero;
