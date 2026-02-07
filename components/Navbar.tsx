import React, { useState, useEffect } from 'react';
import { createWhatsAppLink } from '../utils/whatsapp';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openGeneralWhatsApp = () => {
    window.open(createWhatsAppLink(), '_blank', 'noopener,noreferrer');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className={`font-script text-2xl md:text-3xl transition-colors duration-300 ${
            isScrolled ? 'text-brand-dark-pink' : 'text-white drop-shadow-md'
        }`}>
          Doce Mania
        </div>
        
        <div className="flex items-center gap-6">
           {/* Desktop Menu */}
          <div className={`hidden md:flex gap-6 font-medium ${isScrolled ? 'text-gray-700' : 'text-white drop-shadow-sm'}`}>
            <a href="#products" className="hover:text-brand-dark-pink transition-colors">Menu</a>
            <a href="#about" className="hover:text-brand-dark-pink transition-colors">About</a>
          </div>

          <button 
            onClick={openGeneralWhatsApp}
            className={`px-5 py-2 rounded-full font-semibold transition-all shadow-md ${
              isScrolled 
                ? 'bg-brand-chocolate text-white hover:bg-brand-dark-pink' 
                : 'bg-white text-brand-chocolate hover:bg-brand-cream'
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;