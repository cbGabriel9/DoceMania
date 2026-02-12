import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-chocolate text-brand-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="font-script text-3xl mb-4">Doce Mania</h3>
            <p className="text-brand-cream/80 max-w-xs mx-auto md:mx-0">
              Trazendo a doçura dos doces para a sua casa.
            </p>
          </div>

          {/* Delivery Info */}
          <div className="flex flex-col items-center md:items-start space-y-3 text-brand-cream/80">
            <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-sm">Delivery Info</h4>
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Videira & região</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} />
              <span>Segunda - Domingo: 8:00h - 19:00h</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Nos siga!</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="bg-white/10 p-3 rounded-full hover:bg-brand-dark-pink transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-brand-cream/50">
          <p>&copy; {new Date().getFullYear()} Doce Mania. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;