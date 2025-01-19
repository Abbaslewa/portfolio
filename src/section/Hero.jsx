import { FaDownload } from 'react-icons/fa'; 
import Abbas from "../assets/Abbas.jpeg";
import jsx from "../assets/jsx.avif"; 

const Hero = () => {
  return (
    <main
      id="home"
      className="relative flex flex-col md:flex-row-reverse items-center justify-center w-full min-h-screen bg-cover bg-center py-12 px-8 md:px-16 overflow-hidden"
      style={{ backgroundImage: `url(${jsx})` }}
    >
      <div className="relative z-10 md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="glass-effect w-[350px] h-[350px] md:w-[400px] md:h-[400px] rounded-full shadow-xl p-4 md:p-6 transition-transform duration-700 hover:scale-110 hover:rotate-3">
          <img
            src={Abbas}
            alt="Abbas"
            className="w-full h-full object-cover rounded-full shadow-[0_0_20px_#00AAFF,0_0_60px_#00AAFF] animate-float transition-transform duration-700 hover:scale-110 hover:rotate-3"
            onError={(e) => e.target.src = "path/to/your/backup-image.jpg"}  // Fallback image
          />
        </div>
      </div>

      <div className="relative z-10 md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 px-6 md:px-10">
        <h1 className="text-3xl p-3 rounded-lg bg-white bg-opacity-20 md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-white to-green-500 animate-text-flicker transition-transform duration-500 hover:scale-105 hover:text-green-400">
          Hi, I'm Abbas
        </h1>
        <p className="bg-white bg-opacity-10 text-white text-lg md:text-2xl font-bold shadow-2xl p-8 hover:text-green-400 rounded-lg transition-all duration-500 transform hover:scale-105 ease-in-out">
          I'm a passionate web developer specializing in modern, responsive web applications. I excel in React, TailwindCSS, and JavaScript, building dynamic and scalable user interfaces.
        </p>

        <div className="flex space-x-4">
          <a
            href="#"
            className="relative inline-block px-6 py-3 text-white font-semibold bg-gradient-to-r from-teal-400 to-blue-700 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-[0_0_20px_#00FFAA] hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600 duration-500"
            aria-label="Hire Abbas"
          >
            Hire Me
          </a>
          <a
            href="Abbas_CVF.pdf" 
            download="Abbas_CVF.pdf" 
            className="hidden md:block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-300 ease-in-out"
            aria-label="Download Abbas's Resume"
          >
            <FaDownload className="inline mr-2" /> 
            Download Resume
          </a>
        </div>

        <div className="md:hidden flex justify-center mt-4">
          <a
            href="Abbas_CVF.pdf" 
            download="Abbas_CVF.pdf" 
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-300 ease-in-out flex items-center"
            aria-label="Download Abbas's Resume"
          >
            <FaDownload className="inline mr-2" /> 
            Download Resume
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
