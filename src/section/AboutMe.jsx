import AbbasImage from '../assets/Abbas.jpeg';

const AboutMe = () => {
  return (
    <section id="about" className="w-full py-12 bg-gray-700 h-auto lg:h-[100vh]">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl text-center mt-7 font-bold text-white mb-8">
          About <span className="text-yellow-500">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          
          <div className="flex flex-col items-center bg-gray-800 text-center rounded-lg shadow-lg w-full md:w-1/4 p-6">
            <div className="w-48 sm:w-64 h-48 sm:h-64 rounded-full overflow-hidden border-4 border-white bg-black mb-6">
              <img
                src={AbbasImage}
                alt="Abbas Omer Hassan Suliman"
                className="h-full object-cover w-full"
              />
            </div>
            <h3 className="text-white text-2xl sm:text-3xl font-bold mt-4">Abbas Omer Hassan Suliman</h3>
            <p className="text-white mt-2">Full-Stack Developer</p>
            <p className="text-white">Frontend Specialist</p>
            <p className="text-white">Backend Developer</p>
          </div>

          <div className="flex flex-col w-full md:w-2/3 bg-gray-800 p-6 sm:p-12 rounded-lg shadow-lg">
            <div className="flex justify-center md:justify-start space-x-4 border-b border-gray-600 pb-4 mb-4">
              <a href="#project" className="text-yellow-500 font-semibold hover:underline">Project</a>
              <a href="#education" className="text-white hover:text-yellow-500 hover:underline">Education</a>
            </div>

            <div className="text-white">
              <p className="leading-relaxed text-base sm:text-lg mb-6 text-gray-300">
                Hi, I'm Abbas Omer Hassan Suliman, a passionate Full-Stack Developer from Sudan. With a strong focus on building dynamic and responsive web applications, I specialize in front-end development using React and TailwindCSS, while also working with back-end technologies like Node.js and MongoDB.
              </p>
              <p className="leading-relaxed text-base sm:text-lg mb-6 text-gray-300">
                I'm driven by the challenge of solving complex problems through code and always seek to learn new technologies and improve my skills. I love contributing to open-source projects and experimenting with cutting-edge design patterns. My goal is to create engaging user experiences and seamless interactions across all platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
