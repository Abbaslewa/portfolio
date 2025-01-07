import AbbasImage from "../assets/Abbas.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faGithub, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactMe = () => {
  return (
    <div id="contact" className="relative h-screen flex justify-center items-center bg-gray-900 overflow-hidden">
      
      
      <img
        src={AbbasImage}
        alt="Abbas"
        className="absolute inset-0 w-full h-full object-cover transform-gpu transition-transform duration-[4000ms] hover:scale-105 filter brightness-30 blur-sm"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/70" />

      
      <div className="relative z-10 flex flex-col space-y-6 w-[85%] sm:w-[60%] lg:w-[40%] bg-black/20 p-10 rounded-2xl backdrop--md shadow-xl hover:shadow-[0_0_40px_rgba(0,255,0,0.3)] transition-shadow duration-500 ease-in-out">
        <h1 className="text-center text-4xl text-white font-bold mb-4">
          Contact Me
        </h1>

        
        <input 
          type="text" 
          placeholder="Your Name" 
          className="p-4 rounded-lg outline-none focus:ring-4 focus:ring-green-500 border-[1px] border-gray-500 bg-white/20 text-white placeholder-gray-300 transition-all duration-300 ease-in-out"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="p-4 rounded-lg outline-none focus:ring-4 focus:ring-green-500 border-[1px] border-gray-500 bg-white/20 text-white placeholder-gray-300 transition-all duration-300 ease-in-out"
        />
        <textarea 
          placeholder="Message" 
          className="p-4 h-32 rounded-lg outline-none focus:ring-4 focus:ring-green-500 border-[1px] border-gray-500 bg-white/20 text-white placeholder-gray-300 transition-all duration-300 ease-in-out"
        ></textarea>

        <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-lg w-full text-lg font-semibold hover:from-green-400 hover:to-blue-400 transition-colors duration-300 ease-in-out focus:ring-4 focus:ring-green-600 shadow-md hover:shadow-lg hover:shadow-green-500/50">
          Submit
        </button>

        <div className="flex justify-center space-x-5 mt-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} className="text-white text-3xl hover:text-green-400 transition-all duration-300 ease-in-out" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
            <FontAwesomeIcon icon={faTiktok} className="text-white text-3xl hover:text-green-400 transition-all duration-300 ease-in-out" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <FontAwesomeIcon icon={faGithub} className="text-white text-3xl hover:text-green-400 transition-all duration-300 ease-in-out" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl hover:text-green-400 transition-all duration-300 ease-in-out" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl hover:text-green-400 transition-all duration-300 ease-in-out" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
