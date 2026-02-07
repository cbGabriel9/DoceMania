import React from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Slogan {
  id: number;
  text: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}