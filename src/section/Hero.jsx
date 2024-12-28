import Abbas from "../assets/Abbas.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main
      id="home"
      className="flex flex-col md:flex-row-reverse items-center justify-center w-full min-h-screen bg-gradient-to-r  py-12 px-8 md:px-16"
    >
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={Abbas}
          alt="Abbas"
          className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-cover rounded-full shadow-2xl outline outline-8 outline-blue-800 transform transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl animate-pulse"
        />
      </div>

      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 px-6 md:px-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-700 transform transition-transform duration-500 hover:scale-105 hover:text-gray-900">
          Hi, I'm Abbas
        </h1>
        <p className="text-gray-950 text-lg md:text-xl leading-relaxed tracking-wide font-light shadow-sm">
          I'm a passionate web developer focused on building modern, responsive
          web applications. I specialize in React, TailwindCSS, and JavaScript,
          creating dynamic and scalable user interfaces.
        </p>
        <Link
          to="/"
          className="bg-blue-800 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 hover:shadow-2xl focus:ring-4 focus:ring-pink-600 focus:ring-opacity-100 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
};

export default Hero;
