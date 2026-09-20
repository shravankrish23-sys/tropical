import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import balineseImg from '../assets/balinese-massage-spa.jpg';

export const BalineseMassage = () => {
  const { business, links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const pillars = [
    {
      badge: "Somatic Grounding",
      title: "Palmar Compression & Nervous System Settling",
      desc: "At Tropical Spa Yelahanka, our Balinese Massage protocol is administered with deliberate, fluid, and rhythmic artistry. The session begins in a private, softly lit therapy suite infused with subtle tropical aromatics. Your therapist starts with broad, rhythmic palmar compression over soft linens to settle your central nervous system and prepare the tissue beds for deeper manual work."
    },
    {
      badge: "Signature Techniques",
      title: "Skin Rolling, Thumb Acupressure & Gliding",
      desc: "Warmed, aromatic carrier oils—such as pure cold-pressed coconut oil infused with exotic frangipani, jasmine, or ylang-ylang essences—are smoothly applied across your body. Your therapist executes long, sweeping glides (effleurage) and firm thumb acupressure along energy pathways to unblock stagnant channels and encourage vital fluid circulation. The signature highlight of Balinese bodywork is skin rolling and flicking—a specialized technique where the therapist gently lifts and rolls the skin and superficial fascia between their thumbs and fingers. This mechanical action breaks up sub-dermal fascial restrictions, mobilizes subcutaneous fluids, and stimulates lymphatic drainage."
    },
    {
      badge: "Physiological Science",
      title: "Passive Stretching, Mechanoreceptors & Vagal Tone",
      desc: "The treatment thoughtfully incorporates gentle limb stretching and passive joint rotation to decompress tight connective tissue planes. From a physiological standpoint, the combination of firm mechanical pressure and aromatic botanical lipids stimulates low-threshold cutaneous mechanoreceptors. This tactile input signals the brain to downregulate sympathetic \"fight-or-flight\" arousal and activate parasympathetic vagal tone, reducing circulating cortisol levels, improving microvascular perfusion, and inducing profound, systemic relaxation."
    }
  ];

  const highlights = [
    {
      title: "1. Deep Relief from Persistent Muscle Tightness & Fatigue",
      desc: "The combination of firm palmar compression, thumb pressure points, and cross-fiber kneading reaches deep muscle bellies, loosening hypertonic muscle fibers and dissolving persistent structural tightness.",
      featured: true
    },
    {
      title: "2. Enhanced Peripheral Circulation & Lymphatic Drainage",
      desc: "Fluid gliding strokes, skin rolling, and directional compression support venous return toward the heart, expanding local capillary beds, accelerating metabolic waste clearance, and reducing tissue stagnation."
    },
    {
      title: "3. Parasympathetic System Activation & Stress Reduction",
      desc: "Continuous mechanical stimulation of skin mechanoreceptors triggers an immediate shift into parasympathetic nervous system dominance. This lowers circulating cortisol levels, quiets an overactive mind, and fosters emotional equilibrium."
    },
    {
      title: "4. Improved Flexibility & Joint Mobility",
      desc: "By integrating gentle passive stretching and joint mobilization, Balinese massage lengthens taut fascial bands and restores smooth range of motion across major joint structures."
    },
    {
      title: "5. Dermal Conditioning & Botanical Hydration",
      desc: "Warm, nutrient-rich coconut oil infused with frangipani conditions the cutaneous barrier, locking in moisture and leaving your skin soft, supple, and delicately scented."
    }
  ];

  const packages = [
    { 
      duration: "60-Minute Session", 
      title: "60-Minute Balinese Massage",
      label: "Full-Body Tension & Energy Harmonization",
      desc: "A comprehensive full-body session covering the back, shoulders, neck, arms, legs, and feet. Ideal for periodic stress relief, easing muscle fatigue, or enjoying a quick exotic reset from daily city demands.",
      popular: false
    },
    { 
      duration: "90-Minute Ritual", 
      title: "90-Minute Extended Balinese Ritual",
      label: "Ultimate Exotic Rejuvenation & Deep Release",
      desc: "Our most popular recommendation for complete somatic restoration. The extended 90-minute format allows your therapist to work at an unhurried pace, incorporating dedicated extra time for deep skin rolling across the back, extended hip and leg stretching, and a soothing head and scalp pressure point release.",
      popular: true
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Aromatic Welcome & Consultation",
      desc: "You are greeted in our tranquil lounge with a refreshing towel and beverage. You will complete a brief consultation form with your therapist to discuss focus areas, health history, and select your preferred tropical oil infusion."
    },
    {
      step: "02",
      title: "Private Therapy Suite & Modesty Draping",
      desc: "You will be escorted to a private, climate-controlled therapy suite featuring soft ambient lighting, warm linens, and soothing island melodies. You disrobe to your comfort level in total privacy; guests may wear comfortable undergarments or a traditional kemben cloth. Our therapists strictly adhere to international professional draping standards, keeping all non-treated body areas fully covered throughout the session."
    },
    {
      step: "03",
      title: "The Balinese Experience",
      desc: "Your therapist applies warm, scented oil using smooth, firm glides, thumb acupressure, skin rolling, and gentle stretching. Room temperature, music volume, and pressure intensity are continuously monitored for your complete comfort."
    },
    {
      step: "04",
      title: "Post-Therapy Tea & Relaxation Lounge",
      desc: "Following your session, you are given time to dress at your own pace before enjoying a warm cup of organic ginger or chamomile herbal tea in our relaxation lounge, allowing the deeply soothing benefits to settle before you re-enter your day."
    }
  ];

  const faqs = [
    {
      q: "How does Balinese Massage differ from Swedish Massage at Tropical Spa Yelahanka?",
      a: "While Swedish Massage relies primarily on light-to-medium gliding strokes (effleurage) and kneading (petrissage) for Western muscle relaxation, Balinese Massage combines medium-to-firm palmar compression, thumb acupressure along energy channels, gentle passive stretching, skin rolling, and warm aromatic essential oils for a deeper, holistic sensory reset."
    },
    {
      q: "What oils are used during a Balinese Massage at Tropical Spa?",
      a: "We use premium, warmed cold-pressed coconut carrier oil infused with natural botanical essences such as frangipani, jasmine, lemongrass, or sandalwood. These nourishing oils deeply hydrate the skin while enhancing the therapeutic aromatherapy experience."
    },
    {
      q: "Is Balinese Massage painful or overly intense?",
      a: "Balinese Massage applies firm, medium-to-deep pressure to address stubborn muscle tightness, but it should never feel sharp or painful. Our certified therapists check in with you throughout the treatment and adjust the pressure to match your exact comfort level."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Balinese Massage in Yelahanka, Bengaluru | Tropical Spa"
        description="Experience authentic Indonesian Balinese Massage at Tropical Spa Yelahanka. Palmar compression, acupressure, skin rolling & warm oils. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/balinese-massage/"
      />

      <div className="page-container">
        
        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="balinese-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Ancient Indonesian Island Healing &amp; Exotic Bodywork | Yelahanka
            </div>
            
            <h1 id="balinese-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Balinese Massage in Yelahanka, Bengaluru | Tropical Spa
            </h1>
            
            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Escape to an exotic sanctuary of tropical tranquility and ancient island healing at <strong>Tropical Spa</strong>, North Bengaluru’s premier destination for luxury bodywork, holistic wellness, and sensory renewal. If you are searching for an exceptional <strong>spa in Yelahanka</strong> to break away from the noise and continuous demands of city life, our peaceful sanctuary provides an enchanting haven designed for total mind-body harmony. Perfectly situated to welcome guests from across Yelahanka New Town, Kogilu Cross, and Judicial Layout, Tropical Spa is trusted by discerning individuals looking for an exceptionally soothing, deeply restorative <strong>massage in Yelahanka</strong>.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Balinese Massage represents one of the world's most revered traditional healing arts. Developed across the Indonesian archipelago along ancient Spice Route trade paths (600–800 AD), this modality synthesizes Indian Ayurvedic traditions, Chinese acupressure techniques, and indigenous Javanese and Balinese village healing rituals (<em>Jamu</em>). Traditionally practiced by village healers (<em>Balian</em>) to restore harmony between the visible physical world (<em>sekala</em>) and the unseen spiritual realm (<em>niskala</em>), Balinese massage combines firm palmar compression, thumb pressure point work, skin rolling, gentle passive stretching, and warm botanical aromatherapy. Whether you are seeking relief from urban stress, long commutes along Bellary Road, or persistent muscle fatigue, Tropical Spa invites you to surrender to an unhurried, exotic journey of total rejuvenation.
            </p>
            
            {/* Single Action CTA */}
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book an authentic Balinese Massage session.")}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '0.9rem 2.5rem', fontSize: '1.1rem', boxShadow: '0 8px 24px rgba(158, 184, 117, 0.25)' }}
              >
                Book Now
              </Button>
            </div>
          </div>
          
          <div className="service-image-holder">
            <picture>
              <source type="image/jpeg" srcSet={balineseImg} />
              <img 
                src={balineseImg} 
                alt="Balinese Massage therapy suite with frangipani blossoms, warm coconut oils, and ambient lantern lighting at Tropical Spa Yelahanka" 
                loading="lazy"
                decoding="async"
                width="480"
                height="400"
              />
            </picture>
          </div>
        </section>

        {/* 2. Detailed Technique & The Experience (3 Visual Pillars) */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2>Detailed Technique &amp; The Experience</h2>
            <p>A harmonious synthesis of acupressure, skin rolling, passive stretching, and warm botanical oils.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.8rem' }}>
            {pillars.map((p, i) => (
              <div 
                key={i} 
                style={{
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(20, 28, 21, 0.6) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '18px',
                  padding: '2.2rem 1.8rem',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--clr-btn-bg)', fontWeight: '700', marginBottom: '0.6rem' }}>
                  {p.badge}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--clr-white)', marginBottom: '1rem', lineHeight: '1.3' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.96rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.85)', margin: 0, flex: 1 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Key Restorative Benefits */}
        <section className="service-highlights-section" aria-labelledby="benefits-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="benefits-heading">Key Restorative Benefits</h2>
            <p>Ancient Southeast Asian healing principles for muscle ease, lymphatic drainage, and mental calm.</p>
          </div>

          <div className="highlights-grid">
            {highlights.map((item, i) => (
              <div 
                key={i} 
                className="highlight-card"
                style={item.featured ? { gridColumn: 'span 1' } : {}}
              >
                <h3 className="highlight-title">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item.title}
                </h3>
                <p className="highlight-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Therapy Durations & Pricing Structure */}
        <section aria-labelledby="pricing-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="pricing-heading">Therapy Durations &amp; Pricing Structure</h2>
            <p>To help you customize your visit to Tropical Spa Yelahanka, we offer tailored session options designed around your schedule and wellness goals:</p>
          </div>

          <div className="service-price-cards" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {packages.map((pkg, i) => (
              <div 
                key={i} 
                className="price-card" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: pkg.popular ? '1px solid var(--clr-btn-bg)' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: pkg.popular ? 'linear-gradient(145deg, rgba(158, 184, 117, 0.08) 0%, rgba(20, 28, 21, 0.8) 100%)' : 'rgba(255, 255, 255, 0.03)'
                }}
              >
                {pkg.popular && (
                  <div style={{ position: 'absolute', top: '-12px', right: '20px', background: 'var(--clr-btn-bg)', color: 'var(--clr-btn-text)', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', padding: '0.25rem 0.8rem', borderRadius: '12px', letterSpacing: '0.05em' }}>
                    ✦ Most Recommended
                  </div>
                )}
                
                <div>
                  <div className="price-duration">{pkg.duration}</div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--clr-white)', marginBottom: '0.4rem' }}>{pkg.title}</h3>
                  <div style={{ color: 'var(--clr-btn-bg)', fontSize: '0.92rem', fontWeight: '600', marginBottom: '1.2rem' }}>{pkg.label}</div>
                  <p style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.82)', lineHeight: '1.6', marginBottom: '2rem' }}>{pkg.desc}</p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <Link 
                    to="/pricing/" 
                    className="btn"
                    style={{ width: '100%', minHeight: '46px', fontSize: '0.95rem' }}
                  >
                    Click to See Price &amp; Tariffs &rarr;
                  </Link>
                  <Button 
                    href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Balinese Massage.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-outline"
                    style={{ width: '100%', minHeight: '40px', fontSize: '0.9rem' }}
                  >
                    Book on WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '1.8rem' }}>
            *All pricing includes a private pre-treatment intake consultation, premium warm tropical carrier oils, traditional draping, and post-session organic herbal tea service.*
          </p>
        </section>

        {/* 5. Luxury Gift Voucher Incentive */}
        <section style={{ marginBottom: '4.5rem', background: 'linear-gradient(135deg, rgba(20, 28, 21, 0.95) 0%, rgba(30, 40, 31, 0.9) 100%)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '2.5rem 2rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'var(--clr-btn-bg)', color: 'var(--clr-btn-text)', padding: '0.35rem 1rem', borderRadius: '16px', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.06em' }}>
            🎁 Special Welcome Voucher
          </div>
          <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--clr-white)', marginBottom: '0.8rem' }}>
            Claim Your ₹1,000 Special Gift Voucher
          </h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '650px', margin: '0 auto 1.5rem', lineHeight: '1.6', fontSize: '1rem' }}>
            Experience our certified therapists, premium private suites, and complimentary beverages with our 100% money-back satisfaction guarantee.
          </p>
          <a
            href={links.whatsappUrl("Hello Tropical Spa! I would like to claim the special gift voucher of Rs.1000 and book a Balinese Massage appointment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}
          >
            Claim ₹1,000 Voucher on WhatsApp
          </a>
        </section>

        {/* 6. What to Expect & Session Journey */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2>What to Expect &amp; Session Journey</h2>
            <p>From the moment you step into Tropical Spa in Yelahanka, every phase of your visit is crafted for ultimate luxury, comfort, and privacy:</p>
          </div>

          <div className="voucher-steps" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {journeySteps.map((j, i) => (
              <div key={i} className="voucher-step">
                <span className="step-num">{j.step}</span>
                <div className="step-title">{j.title}</div>
                <div className="step-desc" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>{j.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Local FAQ Section */}
        <section className="faq-accordion-section" aria-labelledby="faq-heading" style={{ marginBottom: '2rem' }}>
          <h2 id="faq-heading" className="faq-title-center">Frequently Asked Questions</h2>
          
          <div className="faq-list-wrap">
            {faqs.map((faq, i) => (
              <div key={i} className={openFaq === i ? "faq-item-card open" : "faq-item-card"}>
                <button 
                  type="button" 
                  className="faq-question-btn" 
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span>{faq.q}</span>
                  <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className="faq-answer">
                  <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default BalineseMassage;
