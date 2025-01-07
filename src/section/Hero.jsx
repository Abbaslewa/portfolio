import Abbas from "../assets/Abbas.jpeg";
import { Link } from "react-router-dom";
import jsx from "../assets/jsx.avif";

const Hero = () => {
  return (
    <main
      id="home"
      className="flex flex-col md:flex-row-reverse items-center justify-center w-full min-h-screen bg-cover bg-center py-12 px-8 md:px-16"
      style={{ backgroundImage: `url(${jsx})` }}
    >
      <div className="  md:w-1/2 flex justify-center mb-8 md:mb-0 relative">
        <img
          src={Abbas}
          alt="Abbas"
          className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-cover rounded-full shadow-2xl outline outline-8 outline-blue-800 transform transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl animate-pulse"
        />
      </div>

      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 px-6 md:px-10">
        <h1 className="text-3xl p-3 ml-20 rounded-lg bg-white bg-opacity-30 md:text-5xl font-extrabold text-white transform transition-transform duration-500 hover:scale-105 hover:text-green-400">
          Hi, I'm Abbas
        </h1>
        <p className="bg-white bg-opacity-20 text-white text-lg md:text-2xl font-extrabold shadow-2xl p-8 hover:text-green-400 rounded-lg transition-all duration-300 transform hover:scale-105">
          I'm a passionate web developer focused on building modern, responsive
          web applications. I specialize in React, TailwindCSS, and JavaScript,
          creating dynamic and scalable user interfaces.
        </p>

        <div className="flex space-x-4 ml-20">
          <Link
            to="/"
            className="relative inline-block px-6 py-3 text-white font-semibold bg-gradient-to-r from-blue-400 to-blue-950 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            Hire Me
          </Link>
          
        </div>
      </div>
    </main>
  );
};

export default Hero;
