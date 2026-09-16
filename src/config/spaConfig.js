import logoImg from '../assets/logo.png';
import logoWebp from '../assets/logo.webp';
import heroYogaImg from '../assets/hero-yoga.png';
import heroYogaWebp from '../assets/hero-yoga.webp';
import heroCorridorImg from '../assets/hero-corridor.png';
import heroCorridorWebp from '../assets/hero-corridor.webp';
import heroTowelsImg from '../assets/hero-towels.png';
import heroTowelsWebp from '../assets/hero-towels.webp';
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
    logoWebp: logoWebp,
    heroYoga: heroYogaImg,
    heroYogaWebp: heroYogaWebp,
    heroCorridor: heroCorridorImg,
    heroCorridorWebp: heroCorridorWebp,
    heroTowels: heroTowelsImg,
    heroTowelsWebp: heroTowelsWebp
  },
  links: {
    whatsappUrl: (msg) => `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(msg || "Hello Tropical Spa! I would like to know more.")}`,
    telUrl: `tel:+${businessInfo.phoneRaw.replace(/[-\s+]/g, '')}`,
    emailUrl: `mailto:${businessInfo.email}`
  }
};


