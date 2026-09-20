import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { spaConfig } from '../config/spaConfig';
import stoneImg from '../assets/hot-stone-spa.jpg';

export const HotStoneTherapy = () => {
  const { business, links } = spaConfig;
  const [openFaq, setOpenFaq] = useState(0);

  const pillars = [
    {
      badge: "Basalt Thermal Calibration",
      title: "Volcanic Stones Heated to 50°C – 55°C",
      desc: "At Tropical Spa Yelahanka, our Hot Stone Therapy protocol is administered with meticulous care, anatomical precision, and gentle luxury. Your experience unfolds in a private, climate-controlled therapy suite infused with subtle, calming aromatics. Smooth, natural basalt stones—rich in volcanic iron and minerals, chosen specifically for their superior heat retention—are heated in a temperature-controlled water bath to a precise therapeutic window of 50°C to 55°C (122°F to 131°F)."
    },
    {
      badge: "Static & Dynamic Modalities",
      title: "Paraspinal Alignment & Heated Stone Effleurage",
      desc: "The session begins with the placement of warm, cloth-wrapped static stones along key paraspinal alignment points, the palms, and between the toes to settle your nervous system. Next, your therapist applies warmed, heat-stable botanical carrier oils—such as cold-pressed sweet almond, jojoba, or pure coconut oil—across your skin. Holding heated basalt stones as smooth extensions of their hands, the therapist performs long, continuous effleurage glides and circular petrissage movements over major skeletal muscle groups, including the back, shoulders, gluteals, legs, and arms."
    },
    {
      badge: "Thermal Energy Transfer",
      title: "Viscoelastic Extensibility & Spindle Depression",
      desc: "The scientific foundation of Hot Stone Therapy relies on conductive thermal energy transfer. The sustained heat penetrates several centimeters into muscle tissue, inducing rapid localized capillary vasodilation and increasing local blood perfusion. This thermal input increases the viscoelastic extensibility of collagen fibers within hypertonic muscle beds and depresses muscle spindle activity. As a result, tight muscle knots soften naturally under the stones' heat, allowing your therapist to address deeper tissue layers with minimal mechanical force or discomfort."
    }
  ];

  const highlights = [
    {
      title: "1. Deep Thermotherapeutic Muscle Relaxation",
      desc: "Conductive heat transfer relaxes hypertonic muscle beds and increases tissue extensibility, allowing tight shoulders and back knots to melt away without aggressive mechanical pressure.",
      featured: true
    },
    {
      title: "2. Enhanced Microvascular Vasodilation & Perfusion",
      desc: "Penetrating heat triggers localized blood vessel expansion, expanding capillary beds to flush out metabolic waste while delivering oxygenated blood and nutrients to tired tissues."
    },
    {
      title: "3. Rapid Nervous System Sedation & Cortisol Reduction",
      desc: "The combination of continuous thermal warmth and smooth, rhythmic stone glides calms cutaneous mechanoreceptors, shifting your autonomic nervous system into parasympathetic dominance and lowering stress hormones."
    },
    {
      title: "4. Soothing Relief for Chronic Joint & Muscle Aches",
      desc: "Thermotherapy increases local tissue metabolism and desensitizes peripheral nociceptors via pain-gate neural mechanisms, providing effective non-pharmacological relief for chronic stiffness and muscular aches."
    },
    {
      title: "5. Deeper, Restful Sleep Enhancement",
      desc: "By easing physical discomfort and quieting an overactive central nervous system, a Hot Stone Therapy session induces somnolence, helping you enjoy deep, restorative sleep."
    }
  ];

  const packages = [
    { 
      duration: "60-Minute Session", 
      title: "60-Minute Hot Stone Therapy",
      label: "Thermal Muscle & Tension Relief",
      desc: "A comprehensive full-body session utilizing warm basalt stone glides and static placement to relieve primary tension areas—back, shoulders, neck, legs, and arms. Ideal for periodic stress relief and deep muscle warming.",
      popular: false
    },
    { 
      duration: "90-Minute Ritual", 
      title: "90-Minute Extended Hot Stone Ritual",
      label: "Ultimate Full-Body Deep Thermal Reset",
      desc: "Our flagship recommendation for complete physical and mental recovery. The extended 90-minute ritual allows your therapist to work unhurriedly, providing thorough stone warming across the entire posterior chain, extended paraspinal placement, foot stone work, and a calming suboccipital neck and head finish.",
      popular: true
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Pre-Therapy Screening & Consultation",
      desc: "You are greeted in our peaceful lounge with a refreshing towel and beverage. You will complete a brief intake form to discuss target tension zones and review health history. We carefully screen for heat contraindications—such as diabetic neuropathy, impaired thermal sensation, active cardiovascular conditions, or pregnancy—to ensure absolute safety."
    },
    {
      step: "02",
      title: "Private Suite & Modesty Draping",
      desc: "You will be escorted to a private, ambient therapy suite equipped with soft lighting, warm linens, and soothing background music. After disrobing to your comfort level in total privacy, you lie beneath soft sheets. Our therapists strictly adhere to international draping protocols, keeping all non-treated body areas fully covered throughout."
    },
    {
      step: "03",
      title: "The Hot Stone Experience",
      desc: "Your therapist places wrapped warm stones on key alignment points before gliding smooth, oiled basalt stones across your body. Stone temperature is continuously checked against your personal comfort level to maintain a soothing, safe warmth."
    },
    {
      step: "04",
      title: "Post-Therapy Tea & Relaxation Lounge",
      desc: "Following your session, you are given time to dress at your own pace before enjoying a warm cup of organic chamomile or ginger herbal tea in our relaxation lounge, letting the deep warmth settle before you step back into your day."
    }
  ];

  const faqs = [
    {
      q: "How hot are the stones used in Hot Stone Therapy at Tropical Spa Yelahanka?",
      a: "Our volcanic basalt stones are sanitized and heated in a temperature-controlled water bath to a safe, comfortable therapeutic range of 50°C to 55°C (122°F to 131°F). Your therapist always tests the stone temperature on their own hands first and verifies with you before applying them to your skin."
    },
    {
      q: "How does Hot Stone Therapy differ from a Deep Tissue or Swedish Massage?",
      a: "While Swedish and Deep Tissue massages rely primarily on manual physical pressure and friction from the therapist's hands, Hot Stone Therapy uses heated volcanic stones as thermal tools. The conductive heat pre-softens muscle layers, allowing deep muscular tension to release with much lighter, more comfortable manual pressure."
    },
    {
      q: "Who should avoid Hot Stone Therapy or exercise caution with heat modalities?",
      a: "Hot Stone Therapy is contraindicated for individuals with impaired thermal sensation (such as diabetic neuropathy), active open wounds, severe varicose veins, acute local inflammation, uncontrolled hypertension, active skin infections, or during pregnancy. If you have underlying medical conditions, our Yelahanka team will help you choose a suitable alternative treatment."
    },
    {
      q: "Where is Tropical Spa located in Yelahanka, and is parking available?",
      a: "Tropical Spa is conveniently located in central Yelahanka, North Bengaluru, with easy access from Yelahanka New Town, Kogilu Cross, Judicial Layout, and the Bellary Road highway. We offer dedicated, hassle-free parking facilities for all our guests, ensuring a seamless and stress-free visit."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Hot Stone Therapy in Yelahanka, Bengaluru | Tropical Spa"
        description="Experience deep thermal muscle relaxation with heated volcanic basalt stones at Tropical Spa Yelahanka. Relieve stiffness and soothe nerves. Book now: +91 95503 66963."
        canonical="https://tropicalspa.in/services/hot-stone-therapy/"
      />

      <div className="page-container">
        
        {/* 1. Hero Banner */}
        <section className="service-hero-banner" aria-labelledby="hotstone-h1">
          <div className="service-banner-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1.2rem', color: 'var(--clr-btn-bg)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ✦ Volcanic Basalt Thermotherapy &amp; Deep Somatic Warmth | Yelahanka
            </div>
            
            <h1 id="hotstone-h1" style={{ lineHeight: '1.2', marginBottom: '1.2rem' }}>
              Hot Stone Therapy in Yelahanka, Bengaluru | Tropical Spa
            </h1>
            
            <p className="service-desc" style={{ marginBottom: '1.2rem' }}>
              Step into an oasis of penetrating warmth, soothing luxury, and profound somatic renewal at <strong>Tropical Spa</strong>, North Bengaluru’s premier destination for thermotherapeutic bodywork, holistic wellness, and peaceful escape. If you are searching for an exceptional <strong>spa in Yelahanka</strong> to melt away deep-seated physical stress and escape the relentless rush of urban living, our tranquil haven offers an idyllic retreat. Conveniently situated to welcome guests from across Yelahanka New Town, Kogilu Cross, and Judicial Layout, Tropical Spa is trusted by working professionals, local residents, and travelers seeking the ultimate comforting <strong>massage in Yelahanka</strong>.
            </p>

            <p className="service-desc" style={{ marginBottom: '1.8rem' }}>
              Hot Stone Therapy is an exquisite thermotherapeutic treatment that combines the soothing power of conductive heat with fluid massage strokes. Utilizing smooth, volcanic basalt stones heated to precise therapeutic temperatures, this treatment delivers deep heat directly into taut muscle bellies and tight fascial layers. Whether you are seeking relief from chronic shoulder stiffness caused by long desk hours, recovering from cold-weather muscle chills, or simply treating yourself to an afternoon of total sensory indulgence, Tropical Spa invites you to experience deep, radiant relaxation.
            </p>
            
            {/* Single Action CTA */}
            <div className="cta-button-group" style={{ justifyContent: 'flex-start' }}>
              <Button 
                href={links.whatsappUrl("Hi Tropical Spa! I would like to book a Hot Stone Therapy session.")}
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
              <source type="image/jpeg" srcSet={stoneImg} />
              <img 
                src={stoneImg} 
                alt="Volcanic Hot Stone Therapy suite with heated basalt stones along a plush massage table at Tropical Spa Yelahanka" 
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
            <p>Conductive thermal energy transfer, paraspinal alignment, and heated basalt effleurage glides.</p>
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
            <p>Thermomechanic muscle softening, capillary vasodilation, and nociceptive pain-gate relief.</p>
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
            <p>To help you select the ideal duration for your thermotherapeutic escape at Tropical Spa Yelahanka, we offer tailored session options:</p>
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
                    ✦ Flagship Recommendation
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
                    href={links.whatsappUrl(`Hello Tropical Spa! I would like to book the ${pkg.duration} Hot Stone Therapy.`)}
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
            *All pricing includes a private pre-treatment intake consultation, sanitized volcanic basalt stones, premium warm carrier oils, and post-session organic herbal tea service.*
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
            href={links.whatsappUrl("Hello Tropical Spa! I would like to claim the special gift voucher of Rs.1000 and book a Hot Stone Therapy appointment.")}
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
            <p>From the moment you step into Tropical Spa in Yelahanka, every aspect of your visit is managed with complete professionalism, hygiene, and care:</p>
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

export default HotStoneTherapy;
