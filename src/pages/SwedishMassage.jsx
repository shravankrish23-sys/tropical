import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import swedishImg from '../assets/swedish-massage-spa.jpg';

export const SwedishMassage = () => {
  const { business, links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const pillars = [
    {
      badge: "Directional Sequence",
      title: "Five Classical Manipulations Toward the Heart",
      desc: "At Tropical Spa Yelahanka, our Swedish Massage protocol is administered through a structured, harmonious sequence of five classical manual manipulations, strictly applied in the direction of venous blood flow back toward the heart to optimize vascular return and lymphatic clearance."
    },
    {
      badge: "The Five Modalities",
      title: "Effleurage, Petrissage, Friction, Tapotement & Vibration",
      desc: "The session begins with effleurage—long, sweeping, gliding strokes that warm the underlying soft tissues, distribute the lubricating medium evenly, and habituate the central nervous system to therapeutic touch. The therapist then transitions into petrissage, utilizing rhythmic squeezing, rolling, and kneading movements to isolate muscle bellies, mobilize stagnant fluids, and soften hypertonic tissue beds. To address localized structural tightness, therapists incorporate friction—focused circular or transverse compressive movements across fiber planes that help disrupt superficial micro-adhesions. The session is elevated with gentle tapotement (rhythmic percussive cupping or tapping) to stimulate neuromuscular tone, and fine vibration (oscillatory shaking movements) to relax nervous tissue."
    },
    {
      badge: "Physiological Science",
      title: "Mechanoreceptors & Autonomic Regulation",
      desc: "We utilize light-to-medium rhythmic pressure paired with high-grade, skin-nourishing carrier oils such as cold-pressed sweet almond oil, jojoba oil, or hydrating coconut oil to provide a smooth, friction-free glide. The scientific foundation of Swedish massage relies on neuro-endocrine and autonomic nervous system modulation. The slow, rhythmic mechanical stimulation of low-threshold cutaneous mechanoreceptors—specifically Meissner's corpuscles, Pacinian corpuscles, Merkel discs, and Ruffini endings—sends afferent nerve signals through the spinal cord to the brain. This sensory input attenuates sympathetic \"fight-or-flight\" arousal while elevating parasympathetic vagal activity. Physiologically, this shift significantly lowers circulating salivary cortisol levels, increases soothing oxytocin, enhances microvascular perfusion, and promotes systemic relaxation throughout the body."
    }
  ];

  const highlights = [
    {
      title: "1. Profound Stress Relief & Neuroendocrine Balance",
      desc: "By stimulating low-threshold cutaneous mechanoreceptors, Swedish massage downregulates sympathetic nervous system outflow. This tactile stimulation reduces circulating stress hormones like cortisol while increasing oxytocin and serotonin, facilitating immediate mental calm and emotional stabilization.",
      featured: true
    },
    {
      title: "2. Alleviation of Muscle Tension & Stiffness",
      desc: "Systematic petrissage and effleurage strokes loosen hypertonic muscle fibers, release superficial knots, and reduce post-exertional stiffness across major muscle groups in the back, shoulders, arms, and legs."
    },
    {
      title: "3. Enhanced Circulation & Lymphatic Drainage",
      desc: "Directional gliding strokes applied toward the heart mechanically assist venous return and fluid movement. This process expands local capillary beds, accelerates the clearance of cellular waste products, and delivers fresh oxygenated blood to muscle tissues."
    },
    {
      title: "4. Relief for Non-Specific Back & Neck Pain",
      desc: "Clinical evaluations demonstrate that Swedish massage provides effective short-term relief for chronic non-specific low back pain, upper back tightness, and postural neck strain."
    },
    {
      title: "5. Improved Sleep Quality & Somnolence",
      desc: "The sustained parasympathetic dominance and reduced neuro-endocrine arousal induced during a session help quiet an overactive mind, inducing somnolence and supporting deeper, more restful sleep cycles."
    }
  ];

  const packages = [
    { 
      duration: "60-Minute Session", 
      title: "60-Minute Swedish Massage",
      label: "Complete Full-Body Tension Relief",
      desc: "A comprehensive full-body session covering the back, neck, shoulders, arms, and legs. Perfect for periodic stress management, post-workout relaxation, or an effective escape from daily city fatigue.",
      popular: false
    },
    { 
      duration: "90-Minute Ritual", 
      title: "90-Minute Extended Swedish Ritual",
      label: "Ultimate Deep Somatic Reset",
      desc: "Our recommended choice for thorough physical and mental recovery. The extended 90-minute format allows your therapist to work at an unhurried, deeply soothing pace, including extra dedicated time for hypertonic shoulders, lumbar tightness, and a calming suboccipital scalp release.",
      popular: true
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Pre-Session Clinical Intake",
      desc: "Before your treatment, our certified therapists conduct a private consultation to review your physical focus areas and health history. We screen carefully for contraindications—such as active fever, deep vein thrombosis (DVT), severe vascular issues, or active skin lesions—to ensure your complete safety."
    },
    {
      step: "02",
      title: "Treatment Setup & Professional Draping",
      desc: "You will be escorted to a private, climate-controlled therapy suite featuring soft ambient lighting, warm linens, and soothing music. After disrobing to your comfort level in complete privacy, you lie beneath soft, fresh sheets. Our therapists strictly enforce professional draping protocols at all times, keeping all non-treated areas fully covered to preserve your modesty."
    },
    {
      step: "03",
      title: "The Swedish Massage Experience",
      desc: "Your therapist applies warmed, premium carrier oil using rhythmic, flowing strokes, maintaining gentle communication regarding pressure preference to keep the session soothing and comfortable."
    },
    {
      step: "04",
      title: "Post-Therapy Care & Relaxation Lounge",
      desc: "Following your session, you are given ample time to dress at your own pace before relaxing with a warm cup of organic chamomile or ginger herbal tea in our lounge. Your therapist will recommend drinking adequate water post-session to support tissue hydration and vascular flushing."
    }
  ];

  const faqs = [
    {
      q: "What carrier oil options are available for Swedish Massage at Tropical Spa Yelahanka?",
      a: "We utilize high-quality, cold-pressed carrier oils such as sweet almond, jojoba, and pure coconut oil. For guests with known nut allergies, we provide safe, hypoallergenic vegetable-based oil alternatives such as sunflower oil to ensure total safety."
    },
    {
      q: "Is Swedish Massage suitable if I am new to spa bodywork or prefer lighter pressure?",
      a: "Absolutely! Swedish Massage is widely recognized as the ideal introductory therapy due to its gentle-to-medium pressure, predictable rhythmic tempo, and focus on overall relaxation and stress relief."
    },
    {
      q: "What is the main difference between Swedish Massage and Deep Tissue Massage?",
      a: "Swedish Massage utilizes light-to-medium gliding strokes and kneading to promote systemic relaxation and circulation, whereas Deep Tissue Massage applies slow, intense vertical pressure and cross-fiber friction to target deep sub-dermal muscle layers and fascial trigger points."
    },
    {
      q: "Where is Tropical Spa located in Yelahanka, and is parking available?",
      a: "Tropical Spa is conveniently situated in central Yelahanka with seamless access from Yelahanka New Town, Kogilu Cross, and Judicial Layout. We offer dedicated, hassle-free parking facilities for all our guests, ensuring a smooth and relaxing visit from start to finish."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Swedish Massage in Yelahanka, Bengaluru | Tropical Spa"
        description="Experience the quintessential European Swedish Massage at Tropical Spa Yelahanka. Relieve muscle stiffness, optimize circulation, and restore calm. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/swedish-massage/"
      />

      <div className="page-container">
        
        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="swedish-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Classical European Bodywork &amp; Somatic Harmony | Yelahanka
            </div>
            
            <h1 id="swedish-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Swedish Massage in Yelahanka, Bengaluru | Tropical Spa
            </h1>
            
            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Welcome to <strong>Tropical Spa</strong>, your premier sanctuary for holistic bodywork, somatic rejuvenation, and serene relaxation in North Bengaluru. If you are searching for an exceptional <strong>spa in Yelahanka</strong> to escape the noise and continuous rush of city life, our peaceful retreat offers the perfect environment for complete mind-body balance. Conveniently located to serve guests across Yelahanka New Town, Kogilu Cross, and Judicial Layout, Tropical Spa is trusted by discerning residents, busy working professionals, and travelers seeking the ultimate <strong>massage in Yelahanka</strong>.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Swedish Massage stands as the foundational modality of Western manual therapy, formalized in Sweden during the early 19th century by physiologist Pehr Henrik Ling as part of the "Swedish Movement Cure". Designed to systematically optimize physical health, restore musculoskeletal harmony, and accelerate venous circulation back toward the heart, Swedish massage incorporates five standardized manual movements to ease muscle stiffness, improve fluid dynamics, and induce deep systemic calm. Whether you are seeking relief after a long week of commuting along Bellary Road or simply wish to enjoy an unhurried afternoon of self-care, our skilled therapists deliver a luxurious, restorative experience tailored to your exact comfort.
            </p>
            
            {/* Single Action CTA */}
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Swedish Massage session.")}
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
              <source type="image/jpeg" srcSet={swedishImg} />
              <img 
                src={swedishImg} 
                alt="Swedish Massage therapy suite with sweet almond and jojoba carrier oils, warm linens, and ambient candlelight at Tropical Spa Yelahanka" 
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
            <p>Five classical manual manipulations applied systematically toward the heart for deep vascular &amp; muscular harmony.</p>
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
            <p>Clinically recognized benefits for musculoskeletal ease, circulation, and parasympathetic calm.</p>
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
                    href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Swedish Massage.`)}
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
            *All pricing includes a private pre-treatment intake consultation, premium warm carrier oils, and post-treatment organic herbal tea service.*
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
            href={links.whatsappUrl("Hello Tropical Spa! I would like to claim the special gift voucher of Rs.1000 and book a Swedish Massage appointment.")}
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
            <p>From the moment you step into Tropical Spa in Yelahanka, your experience is carefully crafted to ensure complete privacy, comfort, and professional care:</p>
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

export default SwedishMassage;
