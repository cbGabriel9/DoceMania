import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const ProductGrid: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-dark-pink font-semibold uppercase tracking-wider text-sm">Nosso menu</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-chocolate mt-2 mb-4 font-sans">
            Escolha o seu doce
          </h2>
          <div className="w-24 h-1 bg-brand-pink mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;