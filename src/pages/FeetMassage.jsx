import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import feetImg from '../assets/feet-massage-spa.jpg';

export const FeetMassage = () => {
  const { business, links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const pillars = [
    {
      badge: "Herbal Soak & Prep",
      title: "Warm Sea Salt & Essential Oil Cleanse",
      desc: "At Tropical Spa Yelahanka, your Foot Reflexology session begins with a soothing, warm herbal foot bath infused with sea salts and aromatic eucalyptus or lavender essential oils to warm the soft tissues and cleanse the feet. You then relax back into a plush, ergonomic therapy recliner or padded table, remaining comfortably clothed while your lower legs and feet are expertly cared for."
    },
    {
      badge: "Plantar Reflexology",
      title: "Targeted Thumb-Walking & Fascial Strokes",
      desc: "Your therapist applies a rich, nourishing peppermint or botanical foot balm to provide a smooth glide without feeling greasy. The treatment utilizes classical reflexology thumb-walking techniques, sustained point pressure, and deep longitudinal strokes along the plantar fascia, arches, heels, and tops of the feet. By working systematically across specific reflex zones that map to nerve pathways throughout the body, the therapist releases localized soft-tissue blockages and relaxes hypertonic foot muscles."
    },
    {
      badge: "Lower Limb Mobilization",
      title: "Calf Kneading, Achilles Release & Mechanoreceptors",
      desc: "The session seamlessly extends to include rhythmic petrissage (kneading) of the calf muscles, gentle Achilles tendon mobilization, and passive tarsal and metatarsal joint rotations. From a physiological standpoint, the soles of your feet contain one of the highest concentrations of mechanoreceptors and nerve endings in the human body. Stimulating these sensory receptors triggers a rapid parasympathetic nervous system response, lowering heart rate, promoting peripheral vasodilation, and flushing away metabolic waste from tired lower limbs."
    }
  ];

  const highlights = [
    {
      title: "1. Instant Relief for Aching Feet & Plantar Strain",
      desc: "Targeted thumb-walking pressure and longitudinal glides melt away chronic tightness in the plantar fascia, arches, and heel pads caused by standing, walking, or wearing restrictive footwear.",
      featured: true
    },
    {
      title: "2. Enhanced Lower Limb Circulation & Fluid Drainage",
      desc: "Rhythmic calf kneading and ankle mobilization support venous blood flow and lymphatic drainage back toward the heart, reducing heaviness, fluid retention, and leg fatigue."
    },
    {
      title: "3. Rapid Systemic Stress & Anxiety Reduction",
      desc: "Stimulating dense plantar nerve endings calms the central nervous system, effectively lowering circulating cortisol levels and inducing deep, full-body tranquility."
    },
    {
      title: "4. Improved Joint Flexibility & Ankle Range of Motion",
      desc: "Gentle passive joint rotations and tendon stretching release stiffness in the tarsal and metatarsal joints, restoring smooth gait mechanics and foot mobility."
    },
    {
      title: "5. Deeper, Restful Sleep Enhancement",
      desc: "The profound parasympathetic shift and physical ease experienced during foot reflexology help quiet an overactive mind, preparing your body for deep, uninterrupted sleep."
    }
  ];

  const packages = [
    { 
      duration: "30-Minute Session", 
      title: "30-Minute Express Foot & Ankle Relief",
      label: "Quick Energy & Fatigue Reset",
      desc: "A targeted express treatment focusing on warm herbal cleansing, plantar point work, and swift ankle mobilization. Ideal for a quick mid-day reset or immediate relief after long commutes.",
      popular: false
    },
    { 
      duration: "60-Minute Ritual", 
      title: "60-Minute Comprehensive Foot Reflexology Ritual",
      label: "Full Plantar & Calf Revitalization",
      desc: "Our most popular choice for thorough relaxation. This complete session includes an extended herbal foot bath, meticulous 10-zone reflexology work, dedicated calf and shin petrissage, and a relaxing neck and shoulder touch.",
      popular: true
    },
    { 
      duration: "90-Minute Deluxe", 
      title: "90-Minute Extended Reflexology & Lower Limb Deluxe",
      label: "Ultimate Grounding & Somatic Reset",
      desc: "The pinnacle of lower-body recovery. The extended 90-minute ritual allows your therapist to work unhurriedly through complex reflex points, extended calf and knee massage, warm stone foot glides, and a calming suboccipital head release.",
      popular: false
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Welcoming Intake & Herbal Foot Soak",
      desc: "You are greeted in our tranquil lounge with a refreshing towel and beverage. Your experience begins with a warm, soothing foot bath infused with organic herbs and sea salts to ease initial foot tension."
    },
    {
      step: "02",
      title: "Comfortable Recliner Setup & Modesty",
      desc: "You will be escorted to a private or quiet semi-private relaxation lounge featuring plush, adjustable recliners. You remain fully clothed—simply wearing or changing into loose trousers that easily roll up above the knee."
    },
    {
      step: "03",
      title: "The Reflexology Session",
      desc: "Your therapist applies warm botanical balm and executes rhythmic reflexology point work and calf glides, checking in periodically to ensure the pressure remains perfectly comfortable for you."
    },
    {
      step: "04",
      title: "Post-Therapy Care & Relaxation Lounge",
      desc: "Following your session, your feet are cleansed with a warm towel before you are served a cup of organic ginger or chamomile herbal tea, leaving you refreshed, grounded, and ready to walk with ease."
    }
  ];

  const faqs = [
    {
      q: "What is the difference between a standard foot massage and Foot Reflexology at Tropical Spa Yelahanka?",
      a: "A standard foot massage focuses primarily on superficial muscle relaxation and rubbing tired skin. Foot Reflexology is a targeted, systematic technique that applies sustained thumb pressure to specific reflex zones on the feet corresponding to neural pathways throughout the body, providing both localized foot relief and systemic nervous system relaxation."
    },
    {
      q: "Do I need to disrobe for a Foot Reflexology session at Tropical Spa?",
      a: "No disrobing is required! You remain fully clothed throughout the treatment. We simply ask that you wear or change into comfortable pants or trousers that can easily roll up above the calf so your therapist can work on your lower legs and feet."
    },
    {
      q: "Is Foot Reflexology painful if I have very sensitive or ticklish feet?",
      a: "Not at all. Our certified therapists use firm, continuous palmar contact and grounded thumb-walking pressure rather than light, ticklish touching. If any point feels overly tender due to tight fascia, your therapist will immediately adjust the pressure to keep the experience completely soothing."
    },
    {
      q: "How frequently should I book a Foot Massage or Reflexology session at Tropical Spa Yelahanka?",
      a: "For clients managing daily standing fatigue, frequent travel, or long commutes along Bellary Road, an initial routine of 1 to 2 times per week provides rapid recovery. For ongoing wellness, stress reduction, and healthy circulation, a weekly or bi-weekly 60-minute session is ideal for long-term foot health and somatic balance."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Foot Reflexology & Feet Massage in Yelahanka, Bengaluru | Tropical Spa"
        description="Revitalize tired feet, soothe plantar strain, and boost systemic calm with Foot Reflexology & Massage at Tropical Spa Yelahanka. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/feet-massage/"
      />

      <div className="page-container">
        
        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="feet-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Ancient Zone Therapy &amp; Grounded Somatic Renewal | Yelahanka
            </div>
            
            <h1 id="feet-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Foot Reflexology &amp; Feet Massage in Yelahanka, Bengaluru | Tropical Spa
            </h1>
            
            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Step into a sanctuary of instant lightness, grounded relaxation, and somatic renewal at <strong>Tropical Spa</strong>, North Bengaluru’s premier destination for holistic bodywork, foot reflexology, and serene escape. If you are searching for an exceptional <strong>spa in Yelahanka</strong> to soothe tired, aching feet and dissolve the daily exhaustion of urban living, our tranquil haven offers an idyllic retreat. Conveniently situated to serve guests from across Yelahanka New Town, Kogilu Cross, and Judicial Layout, Tropical Spa is trusted by working professionals, frequent travelers, and local residents seeking the ultimate restorative <strong>massage in Yelahanka</strong>.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Our Foot Reflexology &amp; Foot Massage is a specialized therapeutic treatment designed to revitalize overworked lower limbs, relieve plantar fascia tightness, and promote deep systemic calm throughout your entire body. Rooted in ancient Egyptian, Chinese, and Native American healing traditions—and formalized in the early 20th century as modern Zone Therapy—this treatment combines targeted thumb-walking compression on plantar reflex zones with soothing calf and ankle bodywork. Whether you are recovering from long hours on your feet, daily commutes along Bellary Road, or high-strung city stress, Tropical Spa invites you to sit back, sink into bliss, and step out with a spring in your stride.
            </p>
            
            {/* Single Action CTA */}
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Foot Reflexology & Massage session.")}
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
              <source type="image/jpeg" srcSet={feetImg} />
              <img 
                src={feetImg} 
                alt="Foot reflexology suite with hammered bronze soak bowl, frangipani blossoms, and plush recliner at Tropical Spa Yelahanka" 
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
            <p>Herbal foot soak, 10-zone plantar acupressure, calf kneading, and sensory mechanoreceptor stimulation.</p>
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
            <p>Plantar fascia release, lower-limb lymphatic drainage, and full-body parasympathetic reset.</p>
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
            <p>To help you choose the ideal session for your schedule and comfort goals at Tropical Spa Yelahanka, we offer flexible duration options:</p>
          </div>

          <div className="service-price-cards" style={{ maxWidth: '1050px', margin: '0 auto' }}>
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
                    ✦ Most Popular
                  </div>
                )}
                
                <div>
                  <div className="price-duration">{pkg.duration}</div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--clr-white)', marginBottom: '0.4rem' }}>{pkg.title}</h3>
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
                    href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Feet Reflexology & Massage.`)}
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
            *All session rates include a private welcome drink, warm herbal foot bath, rich botanical balms, and post-session organic herbal tea service.*
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
            href={links.whatsappUrl("Hello Tropical Spa! I would like to claim the special gift voucher of Rs.1000 and book a Foot Reflexology & Massage appointment.")}
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
            <p>From the moment you step into Tropical Spa in Yelahanka, your comfort, cleanliness, and peace of mind are held to the highest luxury standards:</p>
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

export default FeetMassage;
