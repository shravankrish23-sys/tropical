import logoImg from '../assets/logo.png';
import heroYogaImg from '../assets/hero-yoga.png';
import heroCorridorImg from '../assets/hero-corridor.png';
import heroTowelsImg from '../assets/hero-towels.png';
import { businessInfo } from './businessInfo.js';

export const spaConfig = {
  business: {
    ...businessInfo
  },
  features: [
    "Premium spa treatment",
    "Certified therapist",
    "Premium therapy room",
    "Complimentary beverages",
    "Complimentary hot/cold towel",
    "100% money-back guarantee*"
  ],
  images: {
    logo: logoImg,
    heroYoga: heroYogaImg,
    heroCorridor: heroCorridorImg,
    heroTowels: heroTowelsImg
  },
  links: {
    whatsappUrl: (msg) => `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(msg || "Hello Tropical Spa! I would like to know more.")}`,
    telUrl: `tel:+${businessInfo.phoneRaw.replace(/[-\s+]/g, '')}`,
    emailUrl: `mailto:${businessInfo.email}`
  }
};

