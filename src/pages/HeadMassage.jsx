import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import headSpaImg from '../assets/head-massage-spa.jpg';

export const HeadMassage = () => {
  const { business, links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const pillars = [
    {
      badge: "4-Stage Trichological Sequence",
      title: "Scalp Assessment & Nutrient Botanical Oiling",
      desc: "At Tropical Spa Yelahanka, our Head Massage & Japanese Head Spa ritual is administered through a sophisticated, 4-stage trichological care sequence designed for both mental tranquility and optimal scalp health. Your session begins in a private, climate-controlled therapy suite infused with calming essential oil aromas and soft ambient lighting. First, your therapist performs a personalized scalp assessment to evaluate dryness, oil balance, and follicle congestion. Next, warm, nutrient-dense botanical hair oils—such as cold-pressed coconut oil, argan oil, jojoba, or herb-infused blends containing rosemary, lavender, and Brahmi—are gently worked into your scalp and hair shafts."
    },
    {
      badge: "Cranial & Suboccipital Release",
      title: "Fascial Suture Lines & Root-Lifting Traction",
      desc: "The heart of the treatment is a meticulous cranial massage. Using circular friction, thumb compression along cranial suture lines, and gentle root-lifting traction, your therapist stimulates localized scalp microcirculation while loosening tight fascial sheets over the skull. Special attention is given to the suboccipital insertion points at the base of the skull and the trapezius muscles of the neck and shoulders to release referred headache tension."
    },
    {
      badge: "Hydrothermal & Autonomic Rest",
      title: "Warm Steam Wrap & Cuticle Lipid Absorption",
      desc: "The ritual concludes with a warm hydrothermal steam or towel wrap that opens the hair cuticles, ensuring deep penetration of active botanical lipids, followed by a soothing neck release. Physiologically, the human scalp is densely populated with cutaneous mechanoreceptors and nerve endings connected directly to the autonomic nervous system. Stimulating these cranial reflex points triggers rapid parasympathetic activation, significantly lowering salivary cortisol levels, slowing a racing mind, and encouraging deep, holistic rest."
    }
  ];

  const highlights = [
    {
      title: "1. Relief for Tension Headaches & Suboccipital Tightness",
      desc: "Targeted friction and pressure point work along the suboccipital ridge, temples, and neck release chronic muscular spasms that trigger tension-type headaches and eye strain from prolonged screen work.",
      featured: true
    },
    {
      title: "2. Follicle Stimulation & Scalp Microcirculation",
      desc: "Rhythmic circular manipulation and gentle root traction increase microvascular blood flow to dormant hair follicles, delivering oxygen and essential nutrients to support healthier hair density and scalp vitality."
    },
    {
      title: "3. Deep Lipid Nourishment & Reduced Hair Breakage",
      desc: "Warm botanical oils like coconut and argan penetrate the hair shaft, reinforcing the hair's natural protein structure, sealing split ends, and conditioning dry, flaky scalp conditions."
    },
    {
      title: "4. Systemic Stress Reduction & Mental Clarity",
      desc: "Cranial touch triggers a swift shift into parasympathetic vagal dominance, quieting racing thoughts, lowering stress hormones, and restoring mental focus and emotional balance."
    },
    {
      title: "5. Enhanced Sleep Quality & Somnolence",
      desc: "By soothing the central nervous system and releasing deep tension in the head and neck, a Japanese Head Spa session promotes natural somnolence, helping you enjoy deep, undisturbed sleep."
    }
  ];

  const packages = [
    { 
      duration: "45-Minute Session", 
      title: "45-Minute Express Scalp & Cranial Relief",
      label: "Quick Tension & Headache Reset",
      desc: "A focused express session targeting the scalp, temples, neck, and shoulders with warm herbal hair oils and suboccipital compression. Perfect for a quick mid-day mental reset or immediate headache relief.",
      popular: false
    },
    { 
      duration: "60-Minute Ritual", 
      title: "60-Minute Classic Japanese Head Spa",
      label: "Full Scalp & Hair Care Ritual",
      desc: "Our popular signature ritual. Includes an in-depth scalp consultation, warm botanical oiling, 40 minutes of meticulous scalp and neck pressure point massage, and a warm hydrothermal steam wrap for deep hair conditioning.",
      popular: true
    },
    { 
      duration: "90-Minute Immersion", 
      title: "90-Minute Deluxe Head Spa & Somatic Reset",
      label: "Ultimate Head, Neck & Shoulder Immersion",
      desc: "The pinnacle of cranial relaxation. This extended ritual combines the complete Japanese Head Spa sequence with extended shoulder, upper back, and facial acupressure work, providing complete mental and physical restoration.",
      popular: false
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Warm Welcome & Scalp Intake",
      desc: "You are greeted in our peaceful reception lounge with a refreshing towel and beverage. You will complete a brief consultation with your therapist to discuss your scalp health, hair goals, and preferred oil scent."
    },
    {
      step: "02",
      title: "Private Suite & Relaxing Setup",
      desc: "You will be escorted to a private, ambient therapy room featuring a comfortable treatment table or ergonomic head spa recliner. Soft background music and warm steam set a serene, spa-like atmosphere."
    },
    {
      step: "03",
      title: "The Head Spa Ritual",
      desc: "Your therapist applies warm botanical oil to your scalp and hair, expertly working through cranial pressure points, circular friction, and suboccipital releases. Room temperature, pressure, and steam warmth are continuously monitored for your complete comfort."
    },
    {
      step: "04",
      title: "Post-Therapy Care & Relaxation Lounge",
      desc: "After your session, your hair is wrapped comfortably before you move to our relaxation lounge to enjoy a warm cup of organic chamomile or ginger herbal tea, letting the tranquil benefits settle into your body."
    }
  ];

  const faqs = [
    {
      q: "Can I wash my hair right after a Japanese Head Spa session at Tropical Spa Yelahanka?",
      a: "We recommend leaving the warm, nutrient-rich botanical oils in your hair for at least 2 to 4 hours post-session (or overnight) to allow your scalp and hair shafts to absorb the conditioning lipids fully before washing with a mild, sulphate-free shampoo."
    },
    {
      q: "Is the Japanese Head Spa suitable for all hair types, including chemically treated or colored hair?",
      a: "Yes, absolutely! Our warm botanical oils and gentle scalp massage techniques are safe and beneficial for all hair textures—including straight, wavy, curly, color-treated, or chemically straightened hair. The treatment deeply hydrates chemically processed strands and restores natural softness."
    },
    {
      q: "Will a Head Massage help if I suffer from frequent screen-related eye strain or tension headaches?",
      a: "Yes. Long hours spent looking at digital screens cause chronic static contraction in the temporal, frontal, and suboccipital muscles. Our Head Massage specifically targets these hypertonic trigger points, releasing tight tissue around the base of the skull and temples to provide immediate relief from tension headaches and eye strain."
    },
    {
      q: "Where is Tropical Spa located in Yelahanka, and is parking available?",
      a: "Tropical Spa is conveniently located in Yelahanka, North Bengaluru, with rapid accessibility from Yelahanka New Town, Kogilu Cross, Judicial Layout, and Bellary Road. We provide dedicated, hassle-free parking facilities for all our guests, ensuring a tranquil and seamless visit."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Head Massage & Head Spa in Yelahanka, Bengaluru | Tropical Spa"
        description="Experience deep cranial relaxation, tension headache relief, and botanical scalp nourishment with Japanese Head Spa at Tropical Spa Yelahanka. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/head-massage/"
      />

      <div className="page-container">
        
        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="head-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Ayurvedic Champi &amp; Japanese Head Spa Ritual | Yelahanka
            </div>
            
            <h1 id="head-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Head Massage &amp; Head Spa in Yelahanka, Bengaluru | Tropical Spa
            </h1>
            
            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Step into an oasis of blissful mental clarity, deep cranial relaxation, and trichological scalp rejuvenation at <strong>Tropical Spa</strong>, North Bengaluru’s premier destination for luxury head spa treatments, holistic wellness, and peaceful escape. If you are searching for an exceptional <strong>spa in Yelahanka</strong> to melt away the mental fatigue, screen strain, and constant stress of modern urban living, our tranquil haven offers an idyllic sanctuary. Ideally located to welcome guests from across Yelahanka New Town, Kogilu Cross, and Judicial Layout, Tropical Spa is trusted by working professionals, tech executives, and local residents seeking an extraordinarily soothing, restorative <strong>massage in Yelahanka</strong>.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Rooted in the ancient 4,000-year-old Ayurvedic art of <em>Champi</em> (cranial massage) and modernized into the world-renowned Japanese Head Spa ritual, our Head Massage is a dedicated somatic and hair care experience. Designed to release deep-seated tension held across the cranial aponeurosis, scalp, suboccipital ridge, and shoulder girdle, this treatment combines targeted pressure point work with rich botanical oiling and warm steam therapy. Whether you are seeking relief from tension headaches caused by long hours in front of screens, recovering from daily commutes along Bellary Road, or treating yourself to an unhurried afternoon of self-care, Tropical Spa invites you to quiet your mind and experience total sensory renewal.
            </p>
            
            {/* Single Action CTA */}
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Head Massage & Head Spa session.")}
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
              <source type="image/jpeg" srcSet={headSpaImg} />
              <img 
                src={headSpaImg} 
                alt="Japanese Head Spa and Ayurvedic cranial massage sanctuary suite with botanical oils, steam, and ambient lighting at Tropical Spa Yelahanka" 
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
            <p>4-stage trichological care, suture-line acupressure, and warm hydrothermal steam wraps.</p>
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
            <p>Targeted tension release, follicle stimulation, lipid nourishment, and deep parasympathetic rest.</p>
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
            <p>To help you choose the ideal cranial treatment for your schedule and wellness goals at Tropical Spa Yelahanka, we offer flexible duration options:</p>
          </div>

          <div className="service-price-cards" style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
                    ✦ Signature Ritual
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
                    href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Head Massage.`)}
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
            *All session rates include a private consultation, premium warm botanical hair oils, steam wrap treatment, and post-session organic herbal tea service.*
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
            href={links.whatsappUrl("Hello Tropical Spa! I would like to claim the special gift voucher of Rs.1000 and book a Head Massage & Japanese Head Spa appointment.")}
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
            <p>From the moment you step into Tropical Spa in Yelahanka, every detail of your visit is designed for total peace, hygiene, and comfort:</p>
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

export default HeadMassage;
