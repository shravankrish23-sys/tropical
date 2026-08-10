import logoImg from '../assets/logo.png';
import heroYogaImg from '../assets/hero-yoga.png';
import heroCorridorImg from '../assets/hero-corridor.png';
import heroTowelsImg from '../assets/hero-towels.png';

export const spaConfig = {
  business: {
    name: "Tropical Spa",
    tagline: "Experience the tropical spa",
    voucherText: "with special gift voucher",
    priceLabel: "Rs.1000",
    currency: "Rs.",
    priceAmount: "1000",
    phone: "+91 95503 66963",
    whatsappNumber: "919550366963",
    whatsappDisplay: "WhatsApp",
    email: "tropicalventures23@gmail.com",
    addressLines: [
      "NO.1 ,1st floor ACSS COMPLEX,",
      "CRPF CAMPUS, Doddaballapura",
      "Main Rd YELAHANKA, Bengaluru - 64"
    ],
    voucherMessage: "Hello Tropical Spa! I would like to claim the special gift voucher of Rs.1000 and book an appointment.",
    bookingMessage: "Hello Tropical Spa! I would like to book a therapy session."
  },
  features: [
    "Premium therapy rooms",
    "Certified therapist",
    "Complementary hot and cold beverages",
    "Complementary hot and cold towel",
    "100% Money back guarantee"
  ],
  images: {
    logo: logoImg,
    heroYoga: heroYogaImg,
    heroCorridor: heroCorridorImg,
    heroTowels: heroTowelsImg
  },
  links: {
    whatsappUrl: (msg) => `https://wa.me/919550366963?text=${encodeURIComponent(msg || "Hello Tropical Spa! I would like to know more.")}`,
    telUrl: "tel:+919550366963",
    emailUrl: "mailto:tropicalventures23@gmail.com"
  }
};
