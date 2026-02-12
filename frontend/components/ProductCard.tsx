import React from 'react';
import { Product } from '../types';
import { createWhatsAppLink } from '../utils/whatsapp';
import { MessageCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleOrderClick = () => {
    const link = createWhatsAppLink(product.name);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-brand-pink/20 flex flex-col h-full">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-brand-chocolate font-bold shadow-sm">
          ${product.price.toFixed(2)}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-brand-dark-pink uppercase tracking-wider mb-2">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-brand-chocolate mb-2 font-sans">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
          {product.description}
        </p>

        <button
          onClick={handleOrderClick}
          className="w-full flex items-center justify-center gap-2 bg-brand-chocolate text-white py-3 rounded-xl hover:bg-brand-dark-pink transition-colors duration-300 font-medium"
        >
          <MessageCircle size={18} />
          <span>Encomendar</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;