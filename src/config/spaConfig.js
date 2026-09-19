import logoImg from '../assets/logo-320.png';
import logoWebp from '../assets/logo-320.webp';
import heroYogaImg from '../assets/hero-yoga-480.webp';
import heroYogaWebp from '../assets/hero-yoga-480.webp';
import heroCorridorImg from '../assets/hero-corridor-480.webp';
import heroCorridorWebp from '../assets/hero-corridor-480.webp';
import heroTowelsImg from '../assets/hero-towels-480.webp';
import heroTowelsWebp from '../assets/hero-towels-480.webp';
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


