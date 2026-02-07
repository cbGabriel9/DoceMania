import React from 'react';
import { Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-pink/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-dark-pink rounded-3xl rotate-3 transform translate-x-2 translate-y-2 opacity-20"></div>
              <img
                src="https://picsum.photos/600/600?random=20"
                alt="Owner making sweets"
                className="relative rounded-3xl shadow-lg w-full object-cover aspect-square"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-2 text-brand-dark-pink">
              <Heart className="fill-current" size={24} />
              <span className="font-script text-2xl">Our Story</span>
            </div>

            <h2 className="text-4xl font-bold text-brand-chocolate">
              Made from Scratch, <br />Filled with Passion
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Bem vindo ao Doce Mania! Comecei essa jornada pelo amor em fazer as pessoas sorrirem através dos doces.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Todos os doces são feito a mão com receitas próprias e os melhores ingredientes. Não vendemos apenas doces, entregamos pequenos momentos de alegria para qualquer ocasião.
            </p>

            <div className="pt-4">A
              <p className="font-script text-3xl text-brand-chocolate">Adriana da Costa Ceron</p>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Doceira</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;