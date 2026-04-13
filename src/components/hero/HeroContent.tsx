import { useState } from "react";
import { Link } from "../../ui";
import { Logo } from "../../ui";
import { Menu, X } from "lucide-react"; // Ajout de X pour fermer le menu
import { navLinks } from "../../data/Navlinks";

export default function HeroContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="flex flex-col gap-10 relative">
      
      <div className="flex justify-between items-center">
        <Logo />

        <div className="flex justify-between gap-12 max-[750px]:hidden">
          {navLinks.map((link) => (
            <div key={link.name} onClick={() => setActiveTab(link.name)}>
              <Link 
                to={link.href} 
                className={`transition-colors duration-300 ${
                  activeTab === link.name ? "text-white font-bold" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>

        <button className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-400 max-[750px]:hidden">
          Contact Agent
        </button>

        {/* Bouton Menu Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hidden z-50 px-4 py-2 hover:text-gray-300 transition-all duration-400 max-[750px]:block"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* OVERLAY MENU MOBILE */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 z-40 flex flex-col items-center transition-all justify-center gap-8 min-[751px]:hidden backdrop:backdrop-blur-md">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              onClick={() => {
                setActiveTab(link.name);
                setIsOpen(false); // Ferme le menu après clic
              }}
            >
              <Link 
                to={link.href} 
                className={`text-2xl ${
                  activeTab === link.name ? "text-white font-bold" : "text-gray-400"
                }`}
              >
                {link.name}
              </Link>
            </div>
          ))}
          <button className="mt-4 border border-white text-white px-8 py-3 rounded-lg">
            Contact Agent
          </button>
        </div>
      )}

      {/* TEXT SECTION */}
      <div className={`max-w-4xl transition-all ${isOpen ? "opacity-20" : "opacity-100"}`}>
        <h1 className="text-white text-6xl max-[750px]:text-3xl font-semibold leading-tight">
          <i>Simplifying</i> Property <br /> Buying, Selling, And Renting
        </h1>

        <p className="text-gray-300 mt-4">
          Your life evolves, and your home should too. We design flexible living spaces that adapt to your current needs, ensuring comfort, functionality, and style at every stage of life.
        </p>

        <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-500">
          Explore Listings
        </button>
      </div>
    </div>
  );
}