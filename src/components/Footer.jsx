import { Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gradient-to-r bg-black to-blue-500 text-white flex flex-col items-center justify-center h-[190px]   shadow-2xl p-10">
        <p className="text-xl font-bold">Abbas Lewa</p>
        <p className="text-sm mb-2">© {currentYear} All rights reserved.</p>
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-white" />
          <a href="mailto:abbasomerhassn@gmail.com" className="text-sm hover:underline">
            abbasomerhassn@gmail.com
          </a>
        </div>
      </footer>
    );
}

export default Footer;
