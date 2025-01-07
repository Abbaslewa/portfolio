const About = () => {
  return (
    <main
      id="about"
      className="bg-gradient-to-r from-gray-100 to-gray-600 text-center p-8 mt-14 
      flex justify-center h-[100vh] items-center relative"
    >
      <section
        className="w-full mt-1 max-w-3xl bg-white rounded-lg shadow-xl p-10 md:p-16 
        transition-transform duration-300 ease-in-out delay-150 hover:scale-105 
        relative"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-800">
          About Me
        </h1>
        <div className="flex justify-center mb-4 absolute top-0 right-0 transform -translate-y-1/3 translate-x-1/3">
          <svg
            id="w3_cert_arrow"
            viewBox="0 0 170 143"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20"
          >
            <path
              d="M9.7747 42.7064C9.7747 42.7064 19.5575 77.2951 44.4558 84.8113C62.0225 90.1142 81.0061 80.1196 77.791 68.3309C76.0904 62.0955 69.0574 62.4735 65.5106 65.8444C59.1003 71.9368 67.8591 89.7423 77.9205 96.1324C112.816 118.295 161.943 84.5867 161.943 84.5867"
              stroke="blue"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
            <path
              d="M159.804 93.8429L162.704 84.4917L152.715 80.8293"
              stroke="blue"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <p className="text-lg md:text-xl text-blue-700 leading-relaxed">
          
          I’m a passionate coder with a focus on building efficient, scalable, and reusable
          React components. I love working on the front-end, creating interactive and dynamic web
          applications using modern design principles. My goal is to develop solutions that not only
          perform well but also provide a seamless user experience.
        </p>
      </section>
    </main>
  );
};

export default About;
