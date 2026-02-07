import { WHATSAPP_NUMBER } from '../constants';

export const createWhatsAppLink = (productName?: string): string => {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  if (!productName) {
    return baseUrl;
  }

  const message = `Olá! I'm interested in ordering the ${productName}. Can you give me more details?`;
  const encodedMessage = encodeURIComponent(message);

  return `${baseUrl}?text=${encodedMessage}`;
};