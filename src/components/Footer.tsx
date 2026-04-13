import { FooterLink } from "../data/FooterLiknk"; // Vérifie l'orthographe de ton fichier (Liknk vs Link)
import { Logo } from "../ui";
import { 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#18181b] text-white pt-16 pb-9 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-8">
        
        <div className="col-span-2 lg:col-span-3 space-y-6">
          <Logo />
          <p className="text-gray-400 text-sm leading-relaxed pr-4">
            Helping You Find the Perfect Home, Every Step of the Way.
          </p>
        </div>

        {FooterLink.map((section, index) => (
          <div 
            key={section.name} 
            className={`${index === 2 ? "col-span-2" : "col-span-1"} lg:col-span-2`}
          >
            <h3 className="text-base font-semibold text-white mb-6">
              {section.name}
            </h3>
            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 lg:col-span-3 space-y-4">
          <h3 className="text-base font-semibold text-white mb-6">
            Subscribe for Updates
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Get the latest news and updates directly in your inbox.
          </p>
          
          <div className="bg-white rounded-lg p-1 flex items-center mt-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent text-gray-900 px-3 py-1 w-full text-sm focus:outline-none placeholder-gray-400"
            />
            <button className="bg-[#18181b] text-white text-xs font-bold px-4 py-2 rounded-md hover:bg-black transition-colors tracking-tight">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-1 pt-4 border-t border-gray-500/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <p className="text-gray-400 text-sm font-light">
          2025 Urbanet. All rights reserved.
        </p>
        
        <div className="flex gap-3">
          {[
            { Icon: FaTwitter, link: "#" },
            { Icon: FaFacebookF, link: "#" },
            { Icon: FaInstagram, link: "#" },
            { Icon: FaLinkedinIn, link: "#" }
          ].map((social, i) => (
            <a 
              key={i}
              href={social.link} 
              className="bg-white text-[#18181b] p-2 rounded-full hover:bg-gray-200 transition-all flex items-center justify-center w-8 h-8"
            >
              <social.Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}