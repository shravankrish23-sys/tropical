import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Hero } from '../components/Hero';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';

export const Home = () => {
  const { business, links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    if (openFaq === idx) {
      setOpenFaq(null);
    } else {
      setOpenFaq(idx);
    }
  };

  const services = [
    {
      title: "Deep Tissue Massage",
      desc: "Targeted clinical therapy designed to alleviate chronic muscle tightness, adhesions, and deep myofascial tension.",
      path: "/services/deep-tissue-massage/",
      img: spaConfig.images.heroYoga
    },
    {
      title: "Traditional Thai Massage",
      desc: "Ancient dry bodywork combining passive yoga stretches, rhythmic joint mobilization, and SEN energy line pressure.",
      path: "/services/traditional-thai-massage/",
      img: spaConfig.images.heroCorridor
    },
    {
      title: "Classic Swedish Therapy",
      desc: "Quintessential relaxation massage utilizing long gliding strokes and organic essential oils to reduce everyday fatigue.",
      path: "/services/swedish-massage/",
      img: spaConfig.images.heroTowels
    },
    {
      title: "VIP Couples Suite",
      desc: "Celebrate together with side-by-side full-body massages, warm herbal steam, and a shared hydrotherapy bath.",
      path: "/services/couples-massage/",
      img: spaConfig.images.heroYoga
    }
  ];

  const amenities = [
    {
      title: "₹1,000 Special Gift Voucher",
      desc: "Claim ₹1,000 off on select luxury wellness and therapy packages.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Certified Therapists",
      desc: "Background-verified, professionally trained male and female therapists.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "100% Organic Oils",
      desc: "Pure organic carrier and essential oils tailored to your body type.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Complimentary Beverages",
      desc: "Enjoy refreshing herbal teas, welcome drinks, and premium hot/cold towels.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Satisfaction Guarantee",
      desc: "We stand behind our services with a 100% money-back guarantee.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const faqs = [
    {
      q: "Where is Tropical Spa located?",
      a: `Tropical Spa is located at 1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd, next to Nice Mart, Yelahanka, Bengaluru - 560064.`
    },
    {
      q: "How do I claim the ₹1,000 gift voucher?",
      a: "Call or WhatsApp us at +91 95503 66963 or visit us in Yelahanka to claim your ₹1,000 gift voucher on select therapies."
    },
    {
      q: "What are your operating hours?",
      a: "We are open 7 days a week from 10:00 AM to 9:00 PM."
    },
    {
      q: "Do you have male and female therapists?",
      a: "Yes, we employ certified, background-verified male and female therapists to provide a comfortable, professional, and therapeutic experience tailored to your requirements."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Tropical Spa | Luxury Spa & Massage Centre in Yelahanka, Bengaluru"
        description="Visit Tropical Spa on Doddaballapura Main Rd, Yelahanka. Certified therapists, premium private rooms, complimentary beverages & ₹1000 special vouchers. Call +91 95503 66963."
      />

      {/* Hero section */}
      <Hero />

      {/* Section 1: Brand Sanctuary */}
      <section className="home-about-section" aria-labelledby="sanctuary-heading">
        <div className="page-container" style={{ padding: 0 }}>
          <div className="about-grid">
            <div className="about-img-holder">
              <img 
                src={spaConfig.images.heroCorridor} 
                alt="Luxury tranquil arched corridor therapy walkway at Tropical Spa" 
              />
            </div>
            <div className="about-content-block">
              <h1 id="sanctuary-heading" className="page-h1" style={{ textAlign: 'left', fontSize: '2.3rem' }}>
                Luxury Day Spa & Wellness Sanctuary in Yelahanka, Bengaluru
              </h1>
              <p className="about-text">
                Amid the fast pace of Bengaluru, Tropical Spa provides a dedicated sanctuary for holistic restoration, stress relief, and muscular recovery. Located on Doddaballapura Main Road in Yelahanka, our wellness centre blends time-tested Eastern bodywork techniques with premium modern amenities. Every therapy room is an acoustically isolated, temperature-controlled private suite equipped with attached showers, soothing aromatherapy diffusion, and sterilized linens to ensure the highest standards of comfort and hygiene.
              </p>
              <Button href={links.telUrl}>
                Book an Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Therapies */}
      <section className="home-services-section" aria-labelledby="therapies-heading">
        <div className="page-container" style={{ padding: 0 }}>
          <div className="section-header-center">
            <h2 id="therapies-heading">Experience Core Wellness Therapies</h2>
            <p>Select from our menu of clinical bodywork and relaxing therapies, delivered by certified professionals.</p>
          </div>

          <div className="services-grid-overview">
            {services.map((svc, i) => (
              <article key={i} className="service-card-overview">
                <div className="card-img-holder">
                  <img src={svc.img} alt={svc.title} />
                </div>
                <div className="card-body-overview">
                  <h3 className="card-title-overview">{svc.title}</h3>
                  <p className="card-desc-overview">{svc.desc}</p>
                  <Link to={svc.path} className="card-link-btn">
                    Read Treatment details
                    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Exclusive Guest Amenities */}
      <section className="home-amenities-section" aria-labelledby="amenities-heading">
        <div className="page-container" style={{ padding: 0 }}>
          <div className="section-header-center">
            <h2 id="amenities-heading">Exclusive Guest Amenities</h2>
            <p>We elevate every session with thoughtful, premium additions designed for complete comfort.</p>
          </div>

          <div className="amenities-grid">
            {amenities.map((item, i) => (
              <div key={i} className="amenity-card">
                <div className="amenity-icon-wrap">
                  {item.icon}
                </div>
                <h3 className="amenity-title">{item.title}</h3>
                <p className="amenity-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-accordion-section" aria-labelledby="faq-heading">
        <div className="page-container" style={{ padding: 0 }}>
          <h2 id="faq-heading" className="faq-title-center">Frequently Asked Questions</h2>
          
          <div className="faq-list-wrap">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item-card ${openFaq === idx ? 'open' : ''}`}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
