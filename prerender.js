import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');

// Primary Canonical URLs
const primaryRoutes = [
  '/',
  '/pricing',
  '/locations/yelahanka',
  '/privacy-policy',
  '/terms',
  '/services/muscle-relaxing-massage',
  '/services/swedish-massage',
  '/services/aromatherapy-massage',
  '/services/traditional-thai-massage',
  '/services/balinese-massage',
  '/services/deep-tissue-massage',
  '/services/four-hand-massage',
  '/services/back-massage',
  '/services/feet-massage',
  '/services/body-polish',
  '/services/body-scrub',
  '/services/hot-stone-therapy',
  '/services/cupping-therapy',
  '/services/head-massage',
  '/services/couples-massage'
];

// Alias routes mapped to their master canonical URLs
const aliasMap = {
  '/location-yelahanka': '/locations/yelahanka',
  '/muscle-relaxing-massage': '/services/muscle-relaxing-massage',
  '/swedish-massage': '/services/swedish-massage',
  '/aromatherapy-massage': '/services/aromatherapy-massage',
  '/aroma-therapy': '/services/aromatherapy-massage',
  '/thai-massage': '/services/traditional-thai-massage',
  '/balinese-massage': '/services/balinese-massage',
  '/deep-tissue': '/services/deep-tissue-massage',
  '/four-hand-massage': '/services/four-hand-massage',
  '/back-massage': '/services/back-massage',
  '/feet-massage': '/services/feet-massage',
  '/body-polish': '/services/body-polish',
  '/body-scrub': '/services/body-scrub',
  '/hot-stone-therapy': '/services/hot-stone-therapy',
  '/cupping-therapy': '/services/cupping-therapy',
  '/head-massage': '/services/head-massage',
  '/couples-massage': '/services/couples-massage'
};

const allRoutes = [...primaryRoutes, ...Object.keys(aliasMap)];

const metadata = {
  '/': {
    title: 'Tropical Spa Yelahanka | ₹1,000 Voucher | Doddaballapura Rd',
    description: 'Looking for the best luxury spa near you in Yelahanka? Tropical Spa on Doddaballapura Main Rd offers certified Deep Tissue, Thai, Swedish & Couples massage with ₹1,000 vouchers. Open daily 10 AM - 9 PM. Call +91 95503 66963.',
    heading: 'Tropical Spa — Luxury Day Spa & Massage Sanctuary in Yelahanka',
    subheading: 'Sanctuary of holistic wellness, certified body therapies, private attached shower suites, and ₹1,000 special welcome gift vouchers on Doddaballapura Main Rd, Bengaluru.'
  },
  '/pricing': {
    title: 'Therapy Menu & Custom Packages | Tropical Spa Yelahanka Bengaluru',
    description: 'Explore certified massage therapies & customized packages at Tropical Spa Yelahanka. Connect with our front desk for package tariffs & claim your ₹1,000 gift voucher.',
    heading: 'Tropical Spa Menu & Package Offerings in Yelahanka',
    subheading: 'Personalized wellness packages, certified full body therapies, and exclusive ₹1,000 welcome gift vouchers.'
  },
  '/locations/yelahanka': {
    title: 'Best Spa in Yelahanka Bengaluru | Tropical Spa Doddaballapura Main Rd',
    description: 'Looking for the best spa in Yelahanka? Tropical Spa at ACSS Complex on Doddaballapura Main Rd (next to Nice Mart) offers Deep Tissue, Thai, Swedish & Couples massage. Book now: +91 95503 66963.',
    heading: 'Tropical Spa Yelahanka Sanctuary',
    subheading: 'Conveniently located on Doddaballapura Main Road, next to Nice Mart, Yelahanka, Bengaluru.'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Tropical Spa Yelahanka Bengaluru',
    description: 'Official Privacy Policy for Tropical Spa in Yelahanka, Bengaluru. Information handling, appointment safety, and user privacy.',
    heading: 'Privacy Policy — Tropical Spa Yelahanka',
    subheading: 'Transparent information handling and appointment privacy for our guests.'
  },
  '/terms': {
    title: 'Terms of Service | Tropical Spa Yelahanka Bengaluru',
    description: 'Official Terms of Service for Tropical Spa in Yelahanka, Bengaluru. Appointment guidelines, ₹1,000 voucher rules, and spa etiquette.',
    heading: 'Terms of Service — Tropical Spa Yelahanka',
    subheading: 'Appointment terms, ₹1,000 voucher conditions, and professional spa guidelines.'
  },
  '/services/muscle-relaxing-massage': {
    title: 'Muscle Relaxing Massage in Yelahanka Bengaluru | Tropical Spa',
    description: 'Release muscular stiffness and chronic fatigue with Muscle Relaxing Massage at Tropical Spa Yelahanka. Certified therapists. Book now: +91 95503 66963.',
    heading: 'Muscle Relaxing Therapy in Yelahanka',
    subheading: 'Targeted soothing bodywork to release lactic acid buildup and relieve physical fatigue.'
  },
  '/services/swedish-massage': {
    title: 'Swedish Massage in Yelahanka Bengaluru | Tropical Spa',
    description: 'Unwind with a classic luxury Swedish Massage at Tropical Spa Yelahanka. Relax muscles, improve circulation, and melt stress. Book now: +91 95503 66963.',
    heading: 'Classic Swedish Massage Therapy in Yelahanka',
    subheading: 'Gentle, flowing strokes using warm therapeutic herbal oils designed to eliminate tension and promote complete relaxation.'
  },
  '/services/aromatherapy-massage': {
    title: 'Aroma Therapy Massage in Yelahanka Bengaluru | Tropical Spa',
    description: 'Indulge in pure organic Aromatherapy Massage at Tropical Spa Yelahanka. Custom essential oils for deep mental and physical healing. Book now: +91 95503 66963.',
    heading: 'Pure Aromatherapy Massage in Yelahanka',
    subheading: 'Harmonize mind and body with 100% pure organic essential botanical essences.'
  },
  '/services/traditional-thai-massage': {
    title: 'Authentic Thai Massage in Yelahanka Bengaluru | Tropical Spa',
    description: 'Experience authentic Thai dry massage and yoga stretching at Tropical Spa Yelahanka. Boost flexibility and energy. Call +91 95503 66963.',
    heading: 'Authentic Traditional Thai Massage in Yelahanka',
    subheading: 'Ancient passive stretching and acupressure therapy without oils, restoring vitality and joint flexibility.'
  },
  '/services/balinese-massage': {
    title: 'Balinese Massage in Yelahanka Bengaluru | Tropical Spa',
    description: 'Experience authentic Indonesian Balinese Massage at Tropical Spa Yelahanka. Acupressure, reflexology, and warm oils. Book now: +91 95503 66963.',
    heading: 'Authentic Balinese Massage in Yelahanka',
    subheading: 'Indonesian healing ritual combining gentle stretching, rolling strokes, and exotic floral oils.'
  },
  '/services/deep-tissue-massage': {
    title: 'Deep Tissue Massage in Yelahanka | Tropical Spa Bengaluru',
    description: 'Relieve chronic pain, stiff neck, and back tension with Deep Tissue Massage at Tropical Spa Yelahanka. Certified therapists. Book session: +91 95503 66963.',
    heading: 'Deep Tissue Muscle Recovery Massage in Yelahanka',
    subheading: 'Focused deep pressure targeting chronic back pain, muscle stiffness, and athletic fatigue.'
  },
  '/services/four-hand-massage': {
    title: 'Four Hand Massage in Yelahanka Bengaluru | Tropical Spa',
    description: 'Experience the pinnacle of luxury with Four Hand Synchronized Massage at Tropical Spa Yelahanka. Two therapists, pure bliss. Book now: +91 95503 66963.',
    heading: 'Four Hand Synchronized Massage in Yelahanka',
    subheading: 'Two certified therapists working in flawless unison for ultimate sensory immersion.'
  },
  '/services/back-massage': {
    title: 'Back Massage in Yelahanka Bengaluru | Tropical Spa',
    description: 'Fast, focused relief for upper and lower back pain at Tropical Spa Yelahanka. Certified therapists, organic oils. Book now: +91 95503 66963.',
    heading: 'Targeted Back Massage (30 Min) in Yelahanka',
    subheading: 'Rapid relief for desk strain, shoulder knots, and lower back tightness.'
  },
  '/services/feet-massage': {
    title: 'Feet Massage & Reflexology in Yelahanka | Tropical Spa',
    description: 'Revitalize tired feet and improve overall wellness with Foot Massage & Reflexology at Tropical Spa Yelahanka. Book session: +91 95503 66963.',
    heading: 'Foot Reflexology & Massage (30 Min) in Yelahanka',
    subheading: 'Acupressure foot care soothing plantar fascia and enhancing whole-body equilibrium.'
  },
  '/services/body-polish': {
    title: 'Body Polish Treatment in Yelahanka Bengaluru | Tropical Spa',
    description: 'Reveal glowing, velvety-soft skin with our Luxury Body Polish at Tropical Spa Yelahanka. Exfoliation and hydration. Book now: +91 95503 66963.',
    heading: 'Luxury Body Polish (30 Min) in Yelahanka',
    subheading: 'Gentle botanical resurfacing and deep hydration for glowing, radiant skin.'
  },
  '/services/body-scrub': {
    title: 'Body Scrub Treatment in Yelahanka Bengaluru | Tropical Spa',
    description: 'Deeply cleanse and smooth your skin with an Exfoliating Body Scrub at Tropical Spa Yelahanka. Mineral crystals & organic oils. Book now: +91 95503 66963.',
    heading: 'Exfoliating Herbal Body Scrub (30 Min) in Yelahanka',
    subheading: 'Mineral crystal exfoliation to remove dead surface cells and unclog pores.'
  },
  '/services/hot-stone-therapy': {
    title: 'Hot Stone Therapy in Yelahanka Bengaluru | Tropical Spa',
    description: 'Melt away muscle tension with Volcanic Hot Stone Therapy at Tropical Spa Yelahanka. Radiant heat and deep relaxation. Book now: +91 95503 66963.',
    heading: 'Volcanic Hot Stone Therapy in Yelahanka',
    subheading: 'Heated basalt volcanic stones delivering deep radiant thermal muscle relaxation.'
  },
  '/services/cupping-therapy': {
    title: 'Cupping Therapy in Yelahanka Bengaluru | Tropical Spa',
    description: 'Experience myofascial decompression and chronic pain relief with Cupping Therapy at Tropical Spa Yelahanka. Book your session: +91 95503 66963.',
    heading: 'Myofascial Cupping Therapy in Yelahanka',
    subheading: 'Negative pressure suction separating tight fascial layers and accelerating recovery.'
  },
  '/services/head-massage': {
    title: 'Head Massage in Yelahanka Bengaluru | Tropical Spa',
    description: 'Soothe mental exhaustion, tension headaches, and nourish your scalp with traditional Head Massage at Tropical Spa Yelahanka. Book now: +91 95503 66963.',
    heading: 'Ayurvedic Head & Scalp Massage in Yelahanka',
    subheading: 'Shiroabhyanga scalp and temple acupressure to dissolve stress and tension headaches.'
  },
  '/services/couples-massage': {
    title: 'Couples Spa & Massage in Yelahanka | Tropical Spa Bengaluru',
    description: 'Exclusive couples spa packages with private suites and jacuzzi hydrotherapy at Tropical Spa Yelahanka. Reserve your private session: +91 95503 66963.',
    heading: 'Luxury Couples Spa & Jacuzzi Retreat in Yelahanka',
    subheading: 'Side-by-side synchronized body treatments in private romantic couple suites with complimentary beverages.'
  }
};

// Aliases inherit master metadata
for (const [alias, master] of Object.entries(aliasMap)) {
  metadata[alias] = metadata[master];
}

// In-depth semantic profiles for all 15 services (SEO crawler optimization)
const serviceDetails = {
  '/services/deep-tissue-massage': {
    category: 'Full Body Clinical Therapy',
    benefits: [
      'Myofascial Trigger Point Decompression: Resolves stubborn physical adhesions along upper back and neck muscles.',
      'Postural Alignment Restoration: Counteracts strain from prolonged desk sitting, laptop use, and driving.',
      'Lactic Acid Flush: Accelerates recovery after intensive workouts or demanding physical activity.',
      'Deep Nervous System Reset: Transitions the body from chronic sympathetic stress into parasympathetic healing.',
      'Sub-Layer Fascial Mobility: Enhances flexibility, shoulder range-of-motion, and spinal ease.',
      'Enduring Pain Relief: Provides therapeutic structural relief far superior to surface-level rubdowns.'
    ],
    durations: '60 Minutes & 90 Minutes options tailored to your physical recovery goals.',
    therapistNote: 'Administered by certified orthopedic therapists in temperature-controlled private suites with attached hot showers.'
  },
  '/services/traditional-thai-massage': {
    category: 'Full Body Ancient Bodywork',
    benefits: [
      'Passive Yoga Stretching: Gently mobilizes stiff joints, lengthening hamstrings, spine, and hip flexors.',
      'Sen Energy Line Acupressure: Stimulates vital bio-energetic pathways without the use of massage oils.',
      'Complete Musculoskeletal Decompression: Relieves lower back strain and stiffness from sedentary routines.',
      'Enhanced Flexibility: Restores natural mobility and physical lightness across all major muscle groups.',
      'Zero-Residue Dry Bodywork: Performed in comfortable loose spa attire on heated ergonomic mats.',
      'Mental Focus & Vitality: Leaves you feeling alert, balanced, and invigorated rather than lethargic.'
    ],
    durations: '60 Minutes & 90 Minutes dry bodywork sessions.',
    therapistNote: 'Guided by master therapists trained in authentic Eastern stretching and joint mobilization traditions.'
  },
  '/services/swedish-massage': {
    category: 'Full Body European Relaxation',
    benefits: [
      'Gliding Effleurage Strokes: Gently melts muscular tension using warm organic botanical oils.',
      'Circulatory System Stimulation: Boosts blood and oxygen delivery to oxygen-deprived tissues.',
      'Cortisol Level Reduction: Drastically lowers stress hormones while fostering deep mental calm.',
      'Lymphatic Drainage Support: Helps the body naturally clear metabolic waste and reduce fluid retention.',
      'Sleep Quality Enhancement: Helps restore natural circadian rhythms and overcomes insomnia.',
      'Whole-Body Sensory Restoration: A serene journey of gentle pampering and physical renewal.'
    ],
    durations: '60 Minutes & 90 Minutes classic relaxation sessions.',
    therapistNote: 'Features cold-pressed botanicals, warm towels, and a private attached shower for post-massage comfort.'
  },
  '/services/muscle-relaxing-massage': {
    category: 'Full Body Orthopedic Care',
    benefits: [
      'Targeted Muscle Fiber Release: Loosens tight muscle knots and chronic shoulder tension.',
      'Post-Workout Recovery: Accelerates cellular repair and reduces delayed onset muscle soreness (DOMS).',
      'Improved Cellular Oxygenation: Enhances deep microcirculation throughout fatigue-prone muscles.',
      'Relief for Stiff Joints: Restores fluid ease to hips, shoulders, and lower lumbar region.',
      'Custom Pressure Calibration: Tailored from medium to firm based on personal comfort preferences.',
      'Revitalizing Herbal Infusion: Warm therapeutic oils soothe tired muscles deeply.'
    ],
    durations: '60 Minutes & 90 Minutes intensive sessions.',
    therapistNote: 'Trusted by fitness enthusiasts and busy professionals across Yelahanka New Town and Sahakar Nagar.'
  },
  '/services/aromatherapy-massage': {
    category: 'Sensory Holistic Healing',
    benefits: [
      'Pure Essential Botanical Oils: 100% therapeutic-grade plant essences customized to your sensory profile.',
      'Limbic System Relaxation: Aromas trigger immediate neural relaxation, dissolving anxiety and tension.',
      'Gentle Rhythmic Stroking: Enhances skin nourishment and nervous system balance.',
      'Mental Clarity & Stress Relief: Ideal antidote for digital fatigue, screen burnout, and busy lifestyles.',
      'Deep Cellular Hydration: Botanical carrier oils leave skin luminous and conditioned.',
      'Aromatherapeutic Steam: Private attached shower with herbal diffusion completes the experience.'
    ],
    durations: '60 Minutes & 90 Minutes sensory sessions.',
    therapistNote: 'Therapists conduct a pre-session aroma consultation to match your mood and physical needs.'
  },
  '/services/balinese-massage': {
    category: 'Traditional Indonesian Healing',
    benefits: [
      'Exotic Oil Blends: Infused with tropical floral and spice essences rooted in Balinese tradition.',
      'Acupressure & Skin Rolling: Stimulates deep micro-meridians and breaks up surface fascial tension.',
      'Rhythmic Percussive Strokes: Warms up deep tissues while calming overstimulated nerves.',
      'Holistic Mind-Body Balance: Brings profound physical stillness and emotional equanimity.',
      'Detoxification Support: Promotes lymphatic flow and gentle toxin elimination.',
      'Total Restorative Renewal: Leaves you feeling recharged, supple, and peaceful.'
    ],
    durations: '60 Minutes & 90 Minutes authentic Balinese sessions.',
    therapistNote: 'Administered in ambient private suites with dim lighting and soothing traditional soundscapes.'
  },
  '/services/four-hand-massage': {
    category: 'VIP Luxury Synchronized Therapy',
    benefits: [
      'Dual Master Therapists: Two certified therapists working in complete harmonic synchronicity.',
      'Cognitive De-patterning: Brain cannot track dual simultaneous strokes, producing rapid mental surrender.',
      'Doubled Muscular Coverage: Full upper and lower body receiving continuous therapy at the same time.',
      'Ultimate Luxury Indulgence: The undisputed pinnacle of modern spa therapy and pampering.',
      'Profound Relaxation Depth: Reaches meditative states rarely achieved in single-therapist sessions.',
      'VIP Suite Experience: Complete privacy, attached shower, and complimentary refreshments.'
    ],
    durations: '60 Minutes & 90 Minutes synchronized master sessions.',
    therapistNote: 'Pre-booking required to coordinate our certified senior dual therapist team.'
  },
  '/services/couples-massage': {
    category: 'VIP Double Suite Retreat',
    benefits: [
      'Spacious VIP Couple Suite: Acoustic-isolated private suite designed for couples, friends, or family.',
      'Side-by-Side Dual Bodywork: Simultaneous therapies administered by two dedicated therapists.',
      'Shared Hydrotherapy Bath: Jacuzzi hydrotherapy soaking tub with warm herbal bubbles.',
      'Warm Herbal Steam: Private attached steam room to detoxify and open skin pores.',
      'Complimentary Beverages: Welcome drinks, fresh hot towels, and post-session organic tea.',
      'Unforgettable Celebrations: Perfect for anniversaries, birthdays, or weekend relaxation retreats.'
    ],
    durations: '90 Minutes & 120 Minutes comprehensive couple retreats.',
    therapistNote: 'Complete private suite with attached showers and romantic ambient lighting.'
  },
  '/services/back-massage': {
    category: 'Targeted Express Therapy (30 Min)',
    benefits: [
      'Focus on Lumbar & Thoracic Spine: Direct relief for lower back aches and shoulder blade tension.',
      'Counteracts Tech-Neck: Resolves cervical spine tightness from hours at computer monitors.',
      'Rapid Time-Efficient Relief: 30 minutes of high-impact therapy fitting into busy workdays.',
      'Cross-Fiber Friction Work: Dissolves stubborn knots along trapezius and rhomboid muscles.',
      'Improves Driving Fatigue: Soothes strain accumulated during daily commutes along Bellary Road.',
      'Instant Physical Lightness: Leaves your upper torso feeling loose, aligned, and refreshed.'
    ],
    durations: '30 Minutes express therapy.',
    therapistNote: 'Available as a standalone express session or as a targeted upgrade to any full-body session.'
  },
  '/services/feet-massage': {
    category: 'Targeted Reflexology (30 Min)',
    benefits: [
      'Plantar Fascia Decompression: Relieves heel pain, arch strain, and lower calf fatigue.',
      'Acupressure Reflexology Points: Stimulates corresponding systemic zones across the body.',
      'Peripheral Circulation Boost: Reduces swelling and heaviness in ankles and lower legs.',
      'Calming Parasympathetic Trigger: Foot reflexology deeply soothes whole-body nervous tension.',
      'Revitalizing Foot Scrub: Warm towel cleanse and herbal cream application.',
      'Ideal for Daily Walkers: Essential recovery for people on their feet throughout the day.'
    ],
    durations: '30 Minutes focused reflexology.',
    therapistNote: 'Relax in our ergonomic reclining spa lounger with warm herbal tea.'
  },
  '/services/body-polish': {
    category: 'Botanical Skin Resurfacing (30 Min)',
    benefits: [
      'Dead Skin Cell Elimination: Gentle micro-exfoliation sweeps away dullness without abrasion.',
      'Deep Dermal Hydration: Nourishing botanical creams penetrate deeply into exfoliated layers.',
      'Velvety Skin Softness: Leaves skin touchably smooth, conditioned, and revitalized.',
      'Enhanced Skin Tone & Radiance: Promotes healthy cell turnover and natural glow.',
      'Soothing Organic Botanicals: Enriched with natural plant extracts and antioxidants.',
      'Post-Treatment Private Shower: Clean rinse with luxury amenities in private suite.'
    ],
    durations: '30 Minutes skin renewal treatment.',
    therapistNote: 'Pairs beautifully as a preparation step before any full-body relaxation massage.'
  },
  '/services/body-scrub': {
    category: 'Exfoliating Mineral Therapy (30 Min)',
    benefits: [
      'Mineral Crystal Exfoliation: Sea salt and herbal grains unclog congested skin pores.',
      'Cellular Oxygenation Boost: Vigorous application stimulates surface microcirculation.',
      'Detoxifies Skin Surface: Extracts environmental impurities and dead epidermal layers.',
      'Silky Smooth Texture: Restores even softness to rough elbows, knees, and back.',
      'Prepares Skin for Oil Absorption: Maximizes benefits of subsequent massage botanicals.',
      'Enlivening Full-Body Glow: Leaves skin radiant, purified, and visibly energized.'
    ],
    durations: '30 Minutes purifying scrub.',
    therapistNote: 'Followed by a warm private shower to rinse clean and restore comfort.'
  },
  '/services/hot-stone-therapy': {
    category: 'Therapeutic Thermal Bodywork',
    benefits: [
      'Radiant Volcanic Basalt Stones: Smooth heated stones deliver penetrating heat into deep muscles.',
      'Rapid Muscle Relaxation: Heat loosens stiff fibers without requiring uncomfortable pressure.',
      'Accelerated Blood Flow: Vasodilation floods tissues with fresh oxygen and nutrients.',
      'Mental Stillness: The grounding weight and warmth of volcanic stones soothes anxiety.',
      'Arthritic & Joint Comfort: Eases chronic joint stiffness, bursitis, and dull aches.',
      'Deep Regenerative Warmth: An extraordinary winter or rainy-day therapy.'
    ],
    durations: '20 Minutes add-on or integrated specialized therapy.',
    therapistNote: 'Stones are sanitized and heated to therapeutic temperatures in specialized warmers.'
  },
  '/services/cupping-therapy': {
    category: 'Myofascial Decompression',
    benefits: [
      'Negative Pressure Suction: Pulls fascial layers upward rather than pressing down.',
      'Breaks Deep Fascial Adhesions: Separates bound connective tissues that cause chronic pain.',
      'Accelerates Toxin Drainage: Flushes stagnant cellular debris and metabolic byproducts.',
      'Relieves Stubborn Knots: Highly effective for shoulder impingement and chronic back stiffness.',
      'Enhanced Tissue Elasticity: Restores suppleness to stubborn tight areas.',
      'Favored by Athletes: Used worldwide for rapid muscular reset and sports recovery.'
    ],
    durations: '20 Minutes targeted add-on therapy.',
    therapistNote: 'Certified therapists calibrate suction pressure precisely to client comfort.'
  },
  '/services/head-massage': {
    category: 'Ayurvedic Scalp & Temple Care',
    benefits: [
      'Shiroabhyanga Acupressure: Releases intense stress held in scalp, temples, and cranial base.',
      'Alleviates Tension Headaches: Dissolves constriction causing migraines and eye strain.',
      'Nourishing Herbal Hair Oils: Conditions hair follicles and revitalizes scalp health.',
      'Digital Fatigue Antidote: Calms overstimulated minds from screens, emails, and multitasking.',
      'Promotes Deeper Sleep: Calming cranial stimulation fosters tranquil, uninterrupted rest.',
      'Mental Clarity & Balance: Reboots cognitive freshness and emotional lightness.'
    ],
    durations: '30 Minutes dedicated head and scalp therapy.',
    therapistNote: 'Available with warm herbal oils or dry acupressure based on preference.'
  }
};

const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["DaySpa", "HealthAndBeautyBusiness", "LocalBusiness"],
      "@id": "https://tropicalspa.in/#organization",
      "name": "Tropical Spa",
      "alternateName": "Tropical Spa Yelahanka",
      "url": "https://tropicalspa.in",
      "logo": "https://tropicalspa.in/logo.png",
      "image": "https://tropicalspa.in/hero-yoga.png",
      "description": "Tropical Spa in Yelahanka, Bengaluru provides luxury wellness therapies, certified Deep Tissue, Traditional Thai, Swedish, Balinese, Four Hand, and Couples massages with complimentary beverages and ₹1,000 vouchers.",
      "telephone": "+919550366963",
      "email": "tropicalventures23@gmail.com",
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd, next to Nice Mart",
        "addressLocality": "Yelahanka, Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560064",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.121476,
        "longitude": 77.576569
      },
      "hasMap": "https://www.google.com/maps/place/Tropical+Spa/@13.1209003,77.5770156,16z/data=!4m6!3m5!1s0x3bae19c65bc99fdb:0x348c454846c0e5d0!8m2!3d13.1212569!4d77.5765474!16s%2Fg%2F11zd95jf1c?entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "10:00",
          "closes": "21:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/tropicalspa.yelahanka/",
        "https://www.instagram.com/tropicalspa.yelahanka/",
        "https://www.trustpilot.com/review/tropicalspa.in",
        "https://share.google/625MmYP0nILV8oq3x"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Tropical Spa located in Bengaluru?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tropical Spa is located at 1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd, next to Nice Mart, Yelahanka, Bengaluru - 560064."
          }
        },
        {
          "@type": "Question",
          "name": "What massage therapies are offered at Tropical Spa Yelahanka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer Muscle Relaxing Massage, Swedish Massage, Aroma Therapy, Authentic Thai Massage, Balinese Massage, Deep Tissue Massage, Four Hand Massage, Back Massage, Feet Reflexology, Body Polish, Body Scrub, Hot Stone Therapy, Cupping Therapy, and Ayurvedic Head Massage."
          }
        },
        {
          "@type": "Question",
          "name": "How do I claim the ₹1,000 gift voucher?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call or WhatsApp us at +91 95503 66963 or visit our Yelahanka centre to claim your ₹1,000 gift voucher on select therapies."
          }
        },
        {
          "@type": "Question",
          "name": "What are your operating hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tropical Spa is open 7 days a week from 10:00 AM to 9:00 PM."
          }
        }
      ]
    }
  ]
};

(async () => {
  for (const url of allRoutes) {
    const routePath = url === '/' ? '' : url;
    const outDir = toAbsolute(`dist${routePath}`);
    
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    
    let html = template;
    const meta = metadata[url] || metadata['/'];
    
    // Master canonical URL determination: aliases canonicalize to master long-form paths
    const masterTarget = aliasMap[url] || url;
    const canonicalUrl = `https://tropicalspa.in${masterTarget === '/' ? '/' : `${masterTarget}/`}`;
    
    const canonicalLink = `<link rel="canonical" href="${canonicalUrl}" />`;
    const schemaScript = `<script type="application/ld+json" id="local-business-schema" data-schema="local-business">${JSON.stringify(schemaJson)}</script>`;
    
    // Ensure <meta charset="UTF-8" /> is always the very first tag immediately after <head>
    html = html.replace(/<head>(\s*<meta charset=["']UTF-8["']\s*\/?>)?/i, `<head>\n  <meta charset="UTF-8" />\n  ${canonicalLink}\n  ${schemaScript}`);

    if (meta) {
      html = html.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);
      
      if (html.includes('name="title"')) {
        html = html.replace(/<meta name="title" content=".*?"\s*\/?>/, `<meta name="title" content="${meta.title}" />`);
      } else {
        html = html.replace('</title>', `</title>\n  <meta name="title" content="${meta.title}" />`);
      }
      
      if (html.includes('name="description"')) {
        html = html.replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${meta.description}" />`);
      } else {
        html = html.replace('</title>', `</title>\n  <meta name="description" content="${meta.description}" />`);
      }

      if (html.includes('property="og:title"')) {
        html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/, `<meta property="og:title" content="${meta.title}" />`);
      }
      
      if (html.includes('property="og:description"')) {
        html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/, `<meta property="og:description" content="${meta.description}" />`);
      }

      if (html.includes('property="og:url"')) {
        html = html.replace(/<meta property="og:url" content=".*?"\s*\/?>/, `<meta property="og:url" content="${canonicalUrl}" />`);
      } else {
        html = html.replace('</title>', `</title>\n  <meta property="og:url" content="${canonicalUrl}" />`);
      }
    }

    // Build rich, crawler-friendly semantic HTML inside <noscript> for full SEO indexing
    const targetService = serviceDetails[masterTarget];
    let serviceBodyHtml = '';

    if (targetService) {
      serviceBodyHtml = `
        <section style="margin-bottom: 30px;">
          <h2 style="font-size: 1.5rem; color: #1e281f; margin-bottom: 15px;">Key Restorative Benefits</h2>
          <ul style="line-height: 1.8; color: #333; padding-left: 20px;">
            ${targetService.benefits.map(b => `<li style="margin-bottom: 8px;">${b}</li>`).join('\n')}
          </ul>
        </section>

        <section style="margin-bottom: 30px; background: #fdfdfd; border: 1px solid #e2e8df; border-radius: 8px; padding: 20px;">
          <h3 style="color: #243425; margin-top: 0;">Session Duration &amp; Custom Packages</h3>
          <p style="color: #444; line-height: 1.6;">${targetService.durations}</p>
          <p style="color: #555; font-size: 0.95rem;">${targetService.therapistNote}</p>
        </section>

        <section style="margin-bottom: 30px; background: #f9fbf8; border-left: 4px solid #639832; padding: 18px;">
          <h4 style="margin: 0 0 8px 0; color: #1e281f;">Private Attached Shower &amp; Hygiene Standards</h4>
          <p style="margin: 0; color: #444; line-height: 1.6;">
            Every therapy room at Tropical Spa Yelahanka is an acoustically isolated private suite equipped with an attached hot shower, luxury toiletries, sterilized linens, and fresh towels for total privacy and clinical cleanliness.
          </p>
        </section>
      `;
    }

    const fallbackContent = `
      <noscript id="seo-fallback-content">
        <header style="padding: 20px; text-align: center; background: #0c120c; color: #ffffff;">
          <h2>Tropical Spa - Luxury Massage &amp; Wellness Sanctuary</h2>
          <nav style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-top: 10px;">
            <a href="/" style="color: #c5a059;">Home</a>
            <a href="/locations/yelahanka/" style="color: #c5a059;">Yelahanka Centre</a>
            <a href="/pricing/" style="color: #c5a059;">Menu &amp; Packages</a>
            <a href="/services/deep-tissue-massage/" style="color: #c5a059;">Deep Tissue</a>
            <a href="/services/traditional-thai-massage/" style="color: #c5a059;">Thai Massage</a>
            <a href="/services/swedish-massage/" style="color: #c5a059;">Swedish Massage</a>
            <a href="/services/couples-massage/" style="color: #c5a059;">Couples Retreat</a>
            <a href="/services/muscle-relaxing-massage/" style="color: #c5a059;">Muscle Relaxing</a>
            <a href="/services/aromatherapy-massage/" style="color: #c5a059;">Aroma Therapy</a>
            <a href="/services/balinese-massage/" style="color: #c5a059;">Balinese Massage</a>
            <a href="/services/four-hand-massage/" style="color: #c5a059;">Four Hand</a>
          </nav>
        </header>
        <main style="max-width: 900px; margin: 40px auto; padding: 0 20px; font-family: sans-serif; color: #333333;">
          <h1 style="font-size: 2.2rem; color: #141c15; margin-bottom: 12px;">${meta.heading}</h1>
          <p style="font-size: 1.15rem; line-height: 1.6; color: #4a554a; margin-bottom: 25px;">${meta.subheading}</p>
          
          ${serviceBodyHtml}

          <div style="background: #f4f6f2; padding: 25px; border-radius: 8px; margin-bottom: 30px;">
            <h3 style="margin-top: 0; color: #2d4030;">Claim Your ₹1,000 Gift Voucher</h3>
            <p>Experience certified therapists, private suites, and complimentary beverages with ₹1,000 applied to your session.</p>
            <p><strong>Call Desk:</strong> <a href="tel:+919550366963" style="color: #2d4030; font-weight: bold;">+91 95503 66963</a></p>
            <p><strong>WhatsApp Booking:</strong> <a href="https://wa.me/919550366963?text=Hello%20Tropical%20Spa!%20I%20would%20like%20to%20claim%20the%20Rs.1000%20voucher." style="color: #2d4030; font-weight: bold;">Chat on WhatsApp</a></p>
          </div>

          <section style="margin-top: 25px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
            <h4 style="color: #141c15;">Verified Guest Experiences at Tropical Spa</h4>
            <p style="font-style: italic; color: #555;">&ldquo;This place is a peaceful escape from the everyday chaos. Special thanks to therapist Sonam, she is a great therapist, never met one like her before.&rdquo; &mdash; <strong>Jhon Thamos</strong></p>
            <p style="font-style: italic; color: #555;">&ldquo;The massage was great as well as the ambiance. Rosy was excellent. The shower at the end was an excellent touch. I left feeling very relaxed.&rdquo; &mdash; <strong>Valerie Pinilla</strong></p>
          </section>
        </main>
        <footer style="background: #141c15; color: #e0e0e0; padding: 30px 20px; text-align: center;">
          <p><strong>Tropical Spa Yelahanka</strong></p>
          <p>1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd, next to Nice Mart, Yelahanka, Bengaluru - 560064</p>
          <p>Hours: Open Daily 10:00 AM – 9:00 PM</p>
          <div style="margin-top: 15px; display: flex; justify-content: center; gap: 20px;">
            <a href="/privacy-policy/" style="color: #c5a059;">Privacy Policy</a>
            <a href="/terms/" style="color: #c5a059;">Terms of Service</a>
            <a href="https://share.google/625MmYP0nILV8oq3x" style="color: #c5a059;">Google Profile</a>
          </div>
        </footer>
      </noscript>
    `;

    html = html.replace('<div id="root"></div>', `<div id="root"></div>\n${fallbackContent}`);

    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
  }

  console.log(`Prerender complete: Generated ${allRoutes.length} pages successfully with full SEO HTML.`);
})();
