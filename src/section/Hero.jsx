import { FaDownload, FaBehance, FaInstagram, FaLinkedin, FaReact  } from 'react-icons/fa';
import ew from "../assets/ew.png";
import Navbar from '../components/Navbar';  

const Hero = () => {
  return (
    <main
      id="home"
      className="relative flex flex-col md:flex-row-reverse items-center justify-center w-full min-h-screen py-12 px-4 sm:px-6 md:px-16 lg:px-24 bg-gray-700"
    >
      <Navbar />

      <div className="relative top-10 z-10 w-full md:w-1/2 flex justify-center mb-8 md:mb-0" >
        <div className="relative w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[440px] md:h-[440px] p-4 md:p-6 bg-gray-00 rounded-full ml-5 

       shadow-xl shadow-yellow-500/50">
          <img
            src={ew}
            alt="Abbas"
            className="object-cover absolute w-[243px]  h-[244px] -rotate- -top-16 lg:w-[602px] lg:h-[602px]  lg:-top-40  rounded-b-full"
          />
        </div>
      </div>

      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4 sm:space-y-6 px-4 sm:px-6 md:px-10">
        <h1 className="text-xl sm:text-3xl p-3 rounded-lg font-extrabold text-gray-400">
          Hi, I'm Abbas Omer
        </h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl p-3 font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
          I'm a front-end developer, and I love what I do.
        </p>

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
          <FaReact className='text-yellow-600 animate-spin 'size={28}/>
        </div>

        <div className="flex flex-col md:flex-row mt-6 space-y-4 md:space-y-0 md:space-x-8">
          <div className="text-center bg-white bg-opacity-10 text-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
              1+
            </h3>
            <p className="text-sm">Years Experience</p>
          </div>
          <div className="text-center bg-white bg-opacity-10 text-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
              10+
            </h3>
            <p className="text-sm">Projects Done</p>
          </div>
          <div className="text-center bg-white bg-opacity-10 text-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
              10+
            </h3>
            <p className="text-sm">Happy Clients</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
