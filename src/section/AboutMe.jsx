import gog from "../assets/gog.jpeg";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-20 px-5 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 md:mb-14 animate__animated animate__fadeIn">
          About Me
        </h2>

        {/* Navigation Links for Experience and Education */}
        <div className="text-center mb-10 animate__animated animate__fadeIn animate__delay-1s">
          <a
            href="#education"
            className="text-xl font-semibold text-blue-400 hover:text-yellow-300 mx-4"
          >
            Education
          </a>
          <a
            href="#experience"
            className="text-xl font-semibold text-blue-400 hover:text-yellow-300 mx-4"
          >
            Experience
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12 lg:space-x-16">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-700 p-2 lg:p-4 animate-pulse">
              <img
                src={gog}
                alt="About me"
                className="w-full h-full object-cover rounded-full shadow-xl transform hover:scale-105 transition-all duration-500 ease-in-out animate__animated animate__zoomIn"
              />
            </div>
          </div>

          <div className="md:w-3/5 lg:w-1/2 text-center md:text-left space-y-6 animate__animated animate__fadeIn animate__delay-1.5s">
            <p className="text-lg lg:text-xl leading-relaxed transform hover:scale-105 hover:text-green-400 transition-all duration-300 animate__animated animate__fadeIn animate__delay-2s">
              Hi there! I’m <span className="font-bold text-blue-400">Abbas Lewa</span>, a passionate front-end developer specializing in creating captivating and responsive user experiences. With extensive experience in React, TailwindCSS, and modern web technologies, I bring designs to life with elegant and scalable code.
            </p>
            <p className="text-lg lg:text-xl leading-relaxed transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeIn animate__delay-2.5s">
              I’m constantly learning and exploring new trends in the tech world. When I'm not coding, I enjoy contributing to open-source projects, experimenting with new tools, and discovering cutting-edge design patterns.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:from-green-700 hover:to-teal-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 animate__animated animate__fadeIn animate__delay-3s"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
