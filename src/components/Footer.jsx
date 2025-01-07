import { Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-8 px-4 flex flex-col items-center justify-center shadow-inner">
        <div className="flex flex-col items-center space-y-3 mb-4">
          <p className="text-lg font-semibold">Abbas Lewa</p>
          <p className="text-xs">Full Stack Developer</p>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <Mail className="w-5 h-5 text-gray-400" />
          <a href="mailto:abbasomerhassn@gmail.com" className="text-sm hover:text-white transition-colors duration-300">
            abbasomerhassn@gmail.com
          </a>
        </div>
        <p className="text-xs text-gray-500">© {currentYear} Abbas Lewa. All rights reserved.</p>
      </footer>
    );
}

export default Footer;
