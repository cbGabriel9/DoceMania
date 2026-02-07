import React from 'react';
import { SLOGANS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  // Simple rotation or just pick the first one for MVP. 
  // Let's use the first one as primary, but visually display the concept of choice.
  const slogan = SLOGANS[0].text;

  const scrollToProducts = () => {
    const section = document.getElementById('products');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?random=10"
          alt="Delicious sweets background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-chocolate/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-chocolate/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
        <span className="inline-block py-1 px-3 rounded-full bg-brand-pink/90 text-brand-chocolate text-sm font-semibold tracking-wide uppercase mb-2 animate-fade-in-down">
          Feito à mão com muito amor
        </span>
        <h1 className="text-5xl md:text-7xl font-script text-white drop-shadow-md leading-tight">
          Doce Mania
        </h1>
        <p className="text-xl md:text-2xl text-brand-cream font-light italic opacity-95">
          {slogan}
        </p>

        <div className="pt-8">
          <button
            onClick={scrollToProducts}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-brand-dark-pink rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:bg-brand-pink hover:text-brand-chocolate hover:shadow-xl hover:-translate-y-1"
          >
            <span className="mr-2">Visualizar Produtos</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;