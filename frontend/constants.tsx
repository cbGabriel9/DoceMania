import { Product, Slogan } from './types';
import { Instagram, Facebook, Phone } from 'lucide-react';

export const WHATSAPP_NUMBER = "5549991133552"; // Example number

export const SLOGANS: Slogan[] = [
  { id: 1, text: "Sweet moments, homemade with love." },
  { id: 2, text: "A bite of happiness in every piece." },
  { id: 3, text: "Indulge in the magic of Doce Mania." }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: "Classic Brigadeiro",
    description: "Traditional Brazilian chocolate fudge truffles covered in sprinkles.",
    price: 2.50,
    image: "https://picsum.photos/400/300?random=1",
    category: "Truffles"
  },
  {
    id: '2',
    name: "Strawberry Dream Cupcake",
    description: "Fluffy vanilla cupcake topped with fresh strawberry buttercream.",
    price: 4.00,
    image: "https://picsum.photos/400/300?random=2",
    category: "Cupcakes"
  },
  {
    id: '3',
    name: "Salted Caramel Brownie",
    description: "Rich, fudgy brownie with a gooey salted caramel center.",
    price: 3.50,
    image: "https://picsum.photos/400/300?random=3",
    category: "Brownies"
  },
  {
    id: '4',
    name: "Coconut Beijinho",
    description: "Sweet coconut truffles rolled in desiccated coconut and topped with a clove.",
    price: 2.50,
    image: "https://picsum.photos/400/300?random=4",
    category: "Truffles"
  },
  {
    id: '5',
    name: "Lemon Zest Cookie Box",
    description: "A box of 6 tangy and sweet lemon cookies, perfect for tea time.",
    price: 8.00,
    image: "https://picsum.photos/400/300?random=5",
    category: "Cookies"
  },
  {
    id: '6',
    name: "Party Mix Box",
    description: "Assortment of 12 brigadeiros and beijinhos. Great for gifts!",
    price: 15.00,
    image: "https://picsum.photos/400/300?random=6",
    category: "Bundles"
  }
];

export const SOCIAL_LINKS = [
  { name: "Instagram", url: "#", icon: <Instagram size={24} /> },
  { name: "Facebook", url: "#", icon: <Facebook size={24} /> },
  { name: "WhatsApp", url: `https://wa.me/${WHATSAPP_NUMBER}`, icon: <Phone size={24} /> }
];