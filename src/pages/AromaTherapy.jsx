import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import aromaImg from '../assets/aromatherapy-spa.jpg';

export const AromaTherapy = () => {
  const { business, links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const pillars = [
    {
      badge: "Step 1: Scent Discovery",
      title: "Personalized Essential Oil Consultation",
      desc: "At Tropical Spa Yelahanka, every Aromatherapy Massage begins with a personalized scent discovery consultation. You are invited to sample our curated library of 100% pure, therapeutic-grade botanical essential oils—ranging from calming French lavender and soothing Chamomile to uplifting Sweet Orange, crisp Eucalyptus, and exotic Frangipani. Once you select the custom blend that resonates with your emotional and physical needs, your therapist expertly dilutes these active essences into a warm, skin-nourishing carrier oil, such as cold-pressed sweet almond or jojoba oil."
    },
    {
      badge: "Step 2: Mindful Bodywork",
      title: "Gentle, Rhythmic Full-Body Glides",
      desc: "The treatment unfolds in a quiet, softly lit therapy room infused with subtle, calming aromas. Your therapist uses long, sweeping effleurage strokes, gentle palmar glides, and light, rhythmic petrissage (kneading) across your full body. Rather than using aggressive force, the movements are deliberate, fluid, and continuous, designed to soothe superficial muscle tension while encouraging deep, easy breathing."
    },
    {
      badge: "Step 3: The Holistic Science",
      title: "Dual Inhalation & Dermal Absorption",
      desc: "The science and tradition of aromatherapy work through dual pathways: inhalation and dermal absorption. As you breathe in the natural aromatic molecules, volatile micro-compounds travel directly to your olfactory bulb, stimulating the limbic system—the emotional and memory center of the brain. Simultaneously, the nourishing oils are absorbed into the skin, conditioning the dermal barrier and promoting localized microcirculation. This dual action signals your central nervous system to shift out of \"fight-or-flight\" stress mode and into a state of deep parasympathetic rest, leaving you feeling balanced, renewed, and completely grounded."
    }
  ];

  const highlights = [
    {
      title: "1. Profound Mental Calm & Stress Reduction",
      desc: "By stimulating the brain’s limbic pathways, pure essential oils help quiet overactive thoughts, lower nervous tension, and reduce feelings of anxiety, bringing immediate emotional balance and clarity.",
      featured: true
    },
    {
      title: "2. Gentle Muscle Loosening & Tension Relief",
      desc: "Smooth, rhythmic glides and warm botanical oils ease tightness in hypertonic shoulders, neck, and back muscles without the intense discomfort sometimes associated with deeper clinical bodywork."
    },
    {
      title: "3. Enhanced Circulation & Skin Hydration",
      desc: "The combination of gentle palmar pressure and rich, cold-pressed carrier oils stimulates capillary blood flow, assisting natural fluid movement while leaving your skin deeply moisturized, soft, and radiant."
    },
    {
      title: "4. Deep, Restful Sleep Enhancement",
      desc: "Calming essential oil blends like lavender and chamomile, paired with soothing full-body strokes, help regulate your internal relaxation response, making it easier to drift into deep, restorative sleep after your session."
    },
    {
      title: "5. Holistic Mood Elevation & Rejuvenation",
      desc: "Uplifting botanical aromas like citrus and blossom oils stimulate the release of natural feel-good neurotransmitters, helping to refresh your energy, combat mental fatigue, and brighten your spirit."
    }
  ];

  const packages = [
    { 
      duration: "60-Minute Session", 
      title: "60-Minute Aromatherapy Massage",
      label: "Express Stress Relief",
      desc: "A comprehensive full-body session covering the back, neck, shoulders, legs, and arms. Perfect for a mid-week reset or an effective quick escape from daily city stress.",
      popular: false
    },
    { 
      duration: "90-Minute Ritual", 
      title: "90-Minute Extended Ritual",
      label: "Ultimate Deep Rejuvenation",
      desc: "Our most popular choice for complete relaxation. The extended 90-minute format allows your therapist to work at an unhurried, deeply soothing pace, including dedicated extra time for a calming scalp massage, facial acupressure touch, extended back work, and foot relaxation.",
      popular: true
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Aromatic Welcome & Scent Selection",
      desc: "You are greeted into our serene reception lounge with a refreshing welcome drink and a warm towel. You will complete a brief consultation form to discuss your wellness goals, any skin sensitivities, and select your preferred essential oil blend."
    },
    {
      step: "02",
      title: "Private Suite & Modesty Draping",
      desc: "You will be escorted to a private, climate-controlled therapy suite equipped with soft ambient lighting and soothing background melodies. After disrobing to your comfort level in complete privacy, you will rest beneath fresh, luxurious linens. Our therapists strictly adhere to professional draping protocols, ensuring that only the specific area being massaged is exposed at any given time."
    },
    {
      step: "03",
      title: "The Aromatherapy Experience",
      desc: "Your therapist applies the warm, scented oil blend with smooth, flowing strokes, maintaining gentle communication to ensure the room temperature, music volume, and light-to-medium pressure are perfectly comfortable."
    },
    {
      step: "04",
      title: "Post-Therapy Tea & Unhurried Departure",
      desc: "Following your session, you are given ample time to dress at your own pace before enjoying a warm cup of organic chamomile or ginger herbal tea in our relaxation lounge, allowing your mind and body to integrate the benefits of the treatment before stepping back into your day."
    }
  ];

  const faqs = [
    {
      q: "Can I customize my essential oil blend at Tropical Spa Yelahanka?",
      a: "Yes, absolutely! Every Aromatherapy Massage at our Yelahanka spa includes a complimentary pre-treatment scent consultation. You can sample our pure essential oil single notes and custom blends to choose the exact aroma that matches your personal preference and mood."
    },
    {
      q: "What is the difference between Aromatherapy Massage and Swedish Massage?",
      a: "While both treatments utilize gentle-to-medium gliding strokes, Aromatherapy Massage focuses heavily on olfactory wellness and emotional balance through custom pure essential oils. Swedish Massage focuses more directly on mechanical muscle loosening using unscented or lightly scented carrier oils."
    },
    {
      q: "Is parking available at Tropical Spa in Yelahanka?",
      a: "Yes, Tropical Spa provides convenient, hassle-free parking for all our guests. Located centrally in Yelahanka with seamless access from Yelahanka New Town, Kogilu Cross, and Judicial Layout, arriving at your appointment is stress-free."
    },
    {
      q: "How should I prepare for my Aromatherapy Massage session?",
      a: "We recommend arriving 10 to 15 minutes before your scheduled appointment time to relax and complete your scent selection. It is best to avoid heavy meals for an hour before your massage and leave the natural botanical oils on your skin for a few hours post-treatment to maximize hydration and absorption."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Aromatherapy Massage in Yelahanka, Bengaluru | Tropical Spa"
        description="Step into a world of serene sensory indulgence at Tropical Spa Yelahanka. Pure botanical essential oils for complete mind-body harmony. Book: +91 95503 66963."
        canonical="https://tropicalspa.in/services/aromatherapy-massage/"
      />

      <div className="page-container">
        
        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="aroma-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Holistic Botanical Wellness | Yelahanka
            </div>
            
            <h1 id="aroma-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Aromatherapy Massage in Yelahanka, Bengaluru | Tropical Spa
            </h1>
            
            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Step into a world of serene sensory indulgence at <strong>Tropical Spa</strong>, North Bengaluru’s premier destination for holistic bodywork, botanical wellness, and peaceful rejuvenation. If you are searching for an exceptional <strong>spa in Yelahanka</strong> to escape the noise and pressure of daily life, our sanctuary offers a tranquil haven tailored for complete mind-body harmony. Conveniently situated to serve guests across Yelahanka New Town, Kogilu Cross, and Judicial Layout, Tropical Spa is the trusted choice for those seeking the finest, most relaxing <strong>massage in Yelahanka</strong>.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Our Aromatherapy Massage is a luxurious sensory ritual designed to melt away mental fatigue, quiet a restless mind, and restore natural vitality. By harmonizing gentle, rhythmic <Link to="/services/swedish-massage/" style={{ color: 'var(--clr-btn-bg)', textDecoration: 'underline' }}>Swedish bodywork</Link> with the therapeutic power of pure, plant-derived essential oils, this treatment engages both your sense of smell and tactile touch. Whether you are seeking relief from the stress of a demanding workweek, dealing with urban fatigue, or simply craving an unhurried afternoon of self-care, Tropical Spa invites you to slow down, breathe deeply, and surrender to total tranquility.
            </p>
            
            {/* Single Action CTA */}
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book an Aromatherapy Massage session.")}
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
              <source type="image/jpeg" srcSet={aromaImg} />
              <img 
                src={aromaImg} 
                alt="Aromatherapy massage botanical essential oils, frangipani flowers, and luxury towels at Tropical Spa Yelahanka" 
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
            <p>A multisensory journey uniting personalized botanical aromatherapy with rhythmic touch.</p>
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

        {/* 3. Key Restorative Benefits (Balanced Visual Layout) */}
        <section className="service-highlights-section" aria-labelledby="benefits-heading" style={{ marginBottom: '4.5rem' }}>
          <div className="section-header-center">
            <h2 id="benefits-heading">Key Restorative Benefits</h2>
            <p>Experience deep physical relief and mental renewal through botanical essences and flowing touch.</p>
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
            <p>To help you customize your visit to Tropical Spa Yelahanka, we offer flexible session lengths tailored to your schedule and desired level of relaxation:</p>
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
                    href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Aromatherapy Massage.`)}
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
            *All prices are inclusive of your personalized essential oil selection, private consultation, and post-treatment herbal tea service.*
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
            Experience our certified therapists, premium private rooms, and soothing herbal teas with our 100% money-back satisfaction guarantee.
          </p>
          <a
            href={links.whatsappUrl("Hello Tropical Spa! I would like to claim the special gift voucher of Rs.1000 and book an appointment.")}
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
            <p>From the moment you step into Tropical Spa in Yelahanka, your comfort and peace of mind are our highest priorities:</p>
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

export default AromaTherapy;
