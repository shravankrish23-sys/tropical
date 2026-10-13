import React from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Button } from '../components/Button';
import { MapFacade } from '../components/MapFacade';
import { Testimonials } from '../components/Testimonials';
import { spaConfig } from '../config/spaConfig';

export const LocationYelahanka = () => {
  const { business, links } = spaConfig;

  const popularTherapies = [
    {
      title: "Deep Tissue Massage",
      focus: "Chronic Pain & Myofascial Relief",
      durations: "60 / 90 Min",
      path: "/services/deep-tissue-massage/",
      desc: "Firm cross-fiber neuromuscular pressure targeting desk posture strain, stiff shoulders, and deep muscle knots."
    },
    {
      title: "Traditional Thai Massage",
      focus: "Passive Yoga & Energy Stretches",
      durations: "60 / 90 Min",
      path: "/services/traditional-thai-massage/",
      desc: "Dry acupressure along SEN energy meridians with assisted stretching to restore complete joint mobility."
    },
    {
      title: "Classic Swedish Therapy",
      focus: "Full Body Stress Relaxation",
      durations: "60 / 90 Min",
      path: "/services/swedish-massage/",
      desc: "Effleurage gliding strokes using warm botanical oils to melt away everyday work stress and physical exhaustion."
    },
    {
      title: "VIP Couples & Jacuzzi Retreat",
      focus: "Side-by-Side Private Experience",
      durations: "60 / 90 Min",
      path: "/services/couples-massage/",
      desc: "Private couples suite with synchronized bodywork, calming aromatherapy, and relaxing hydrotherapy."
    }
  ];

  const hygieneFeatures = [
    {
      icon: "🚿",
      title: "Private Attached Showers",
      desc: "Every therapy suite features an attached private hot shower with luxury toiletries for a seamless post-session refresh."
    },
    {
      icon: "🌿",
      title: "100% Organic Pure Oils",
      desc: "We exclusively use unadulterated cold-pressed botanicals and custom aromatherapy essential oil blends."
    },
    {
      icon: "✨",
      title: "Hospital-Grade Hygiene",
      desc: "Sterilized linens, sanitized massage tables, and fresh hot/cold towels prepared brand new for every guest."
    },
    {
      icon: "💆",
      title: "Certified Master Therapists",
      desc: "Background-verified, professionally trained therapists dedicated to respectful, personalized wellness."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Best Spa in Yelahanka Bengaluru | Tropical Spa Doddaballapura Main Rd"
        description="Looking for the best luxury spa in Yelahanka? Tropical Spa at ACSS Complex on Doddaballapura Main Rd (next to Nice Mart) offers certified Deep Tissue, Thai, Swedish & Couples therapies. Call +91 95503 66963."
        canonical="https://tropicalspa.in/locations/yelahanka/"
      />

      <div className="page-container">
        
        {/* Page Header */}
        <header className="page-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(158, 184, 117, 0.12)', border: '1px solid rgba(158, 184, 117, 0.25)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1rem', color: 'var(--clr-btn-bg)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            ✦ North Bengaluru Wellness Destination
          </div>
          <h1 className="page-h1">Premium Body Massage &amp; Wellness Spa in Yelahanka, Bengaluru</h1>
          <p className="page-subtitle">1st Floor ACSS Complex, Doddaballapura Main Road (Next to Nice Mart)</p>
        </header>

        {/* Main Grid */}
        <div className="geo-main-grid">
          
          {/* Left Column: Local Copy & Directions */}
          <div className="geo-content-block">
            
            <section aria-labelledby="intro-heading">
              <h2 id="intro-heading" className="geo-section-title">Your Local Wellness Sanctuary in Yelahanka</h2>
              <p className="geo-intro-text" style={{ marginTop: '1rem' }}>
                Conveniently located at 1st Floor, Building No. 1, ACSS Complex, Doddaballapura Main Rd, next to Nice Mart, Tropical Spa is the premier wellness destination for residents across Yelahanka New Town, Kogilu, Allalasandra, Judicial Layout, and surrounding North Bengaluru neighborhoods. Avoid long commutes into central Bengaluru and experience luxury massage therapies right in your neighborhood.
              </p>
            </section>

            {/* Popular Therapies in Yelahanka */}
            <section aria-labelledby="popular-therapies-heading" style={{ marginTop: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
                <h2 id="popular-therapies-heading" className="geo-section-title" style={{ margin: 0 }}>
                  Signature Therapies in Yelahanka
                </h2>
                <Link to="/pricing/" style={{ color: 'var(--clr-btn-bg)', fontSize: '0.92rem', fontWeight: 600, textDecoration: 'none' }}>
                  View All 15 Therapies &rarr;
                </Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem', marginBottom: '2rem' }}>
                {popularTherapies.map((item, idx) => (
                  <div 
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '16px',
                      padding: '1.4rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                        <h3 style={{ fontSize: '1.15rem', color: 'var(--clr-white)', margin: 0 }}>{item.title}</h3>
                        <span style={{ fontSize: '0.75rem', background: 'rgba(158, 184, 117, 0.15)', color: 'var(--clr-btn-bg)', padding: '0.2rem 0.5rem', borderRadius: '10px', fontWeight: 600 }}>
                          {item.durations}
                        </span>
                      </div>
                      <div style={{ color: 'var(--clr-olive-light)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.6rem' }}>
                        {item.focus}
                      </div>
                      <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '1.2rem' }}>
                        {item.desc}
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <Link 
                        to={item.path}
                        className="btn cta-outline"
                        style={{ flex: 1, minHeight: '36px', fontSize: '0.82rem', padding: '0 0.8rem', textAlign: 'center' }}
                      >
                        Details
                      </Link>
                      <Button 
                        href={links.whatsappUrl(`Hello Tropical Spa! Please share the package pricing and availability for ${item.title} at your Yelahanka branch.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ flex: 1.2, minHeight: '36px', fontSize: '0.82rem', padding: '0 0.8rem', whiteSpace: 'nowrap' }}
                      >
                        💬 Inquire
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Private Suite & Hygiene Standards */}
            <section aria-labelledby="hygiene-heading" style={{ marginTop: '2.5rem', background: 'linear-gradient(145deg, rgba(20, 28, 21, 0.7) 0%, rgba(26, 36, 27, 0.7) 100%)', border: '1px solid rgba(158, 184, 117, 0.2)', borderRadius: '18px', padding: '1.8rem' }}>
              <h2 id="hygiene-heading" style={{ fontSize: '1.35rem', color: 'var(--clr-white)', marginBottom: '0.5rem' }}>
                Private Suite &amp; Hygiene Standards
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.92rem', marginBottom: '1.4rem' }}>
                Every visit is designed for absolute serenity, privacy, and clinical cleanliness.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
                {hygieneFeatures.map((h, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.8rem' }}>
                    <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{h.icon}</span>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', color: 'var(--clr-white)', marginBottom: '0.25rem' }}>{h.title}</h4>
                      <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.45', margin: 0 }}>{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Directions & Landmarks */}
            <section aria-labelledby="directions-heading" style={{ marginTop: '2.5rem' }}>
              <h2 id="directions-heading" className="geo-section-title">Directions &amp; Landmarks</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Finding our spa is extremely simple. We are situated directly on the Doddaballapura Highway, ensuring easy accessibility by car, cab, or public transit.
              </p>
              
              <div className="landmarks-grid">
                <div className="landmark-item">
                  <div className="landmark-name">Nice Mart</div>
                  <div className="landmark-desc">Located right next to Nice Mart on Doddaballapura Main Road, serving as our primary regional landmark.</div>
                </div>
                <div className="landmark-item">
                  <div className="landmark-name">ACSS Complex</div>
                  <div className="landmark-desc">Our facility occupies the entire 1st Floor of the ACSS Complex. Look for our clear, premium signage from the highway.</div>
                </div>
                <div className="landmark-item">
                  <div className="landmark-name">Doddaballapura Highway</div>
                  <div className="landmark-desc">Directly accessible on the main road connecting Yelahanka to Doddaballapura, with ample parking space for guests.</div>
                </div>
                <div className="landmark-item">
                  <div className="landmark-name">Yelahanka New Town</div>
                  <div className="landmark-desc">Less than a 5-minute drive from the heart of Yelahanka New Town residential sectors, Kogilu, and Allalasandra.</div>
                </div>
              </div>
            </section>

            {/* High-converting Booking CTAs */}
            <section className="geo-booking-card" aria-labelledby="voucher-booking-heading" style={{ marginTop: '2.5rem' }}>
              <h3 id="voucher-booking-heading">Claim Your ₹1,000 Gift Voucher</h3>
              <p>Book any premium massage or luxury spa package today and receive ₹1,000 off. Connect directly with our front desk to secure your appointment.</p>
              
              <div className="cta-button-group">
                <Button 
                  href={links.telUrl}
                  className="hero-cta-btn"
                  style={{ minWidth: 'auto', padding: '1rem 2rem', fontSize: '1.15rem' }}
                >
                  Call +91 95503 66963
                </Button>
                <Button 
                  href={links.whatsappUrl(business.voucherMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta-btn cta-outline"
                  style={{ minWidth: 'auto', padding: '1rem 2rem', fontSize: '1.15rem' }}
                >
                  WhatsApp Us
                </Button>
              </div>
            </section>

          </div>

          {/* Right Column: Sticky Maps & Hours */}
          <aside className="geo-map-container" aria-label="Location Details">
            <h3 className="geo-section-title" style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Store Information</h3>
            
            <ul className="footer-info-list" style={{ marginBottom: '2rem' }}>
              <li className="footer-info-item">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
                <span>
                  <strong>Address:</strong><br />
                  {business.addressSingleLine}
                </span>
              </li>
              <li className="footer-info-item">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <span>
                  <strong>Hours:</strong><br />
                  {business.hours}
                </span>
              </li>
              <li className="footer-info-item">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z"/>
                </svg>
                <span>
                  <strong>Call Directly:</strong><br />
                  <a href={links.telUrl} style={{ color: 'var(--clr-btn-bg)', textDecoration: 'underline', fontWeight: 600 }}>{business.phone}</a>
                </span>
              </li>
            </ul>

            <div className="geo-map-frame">
              <MapFacade 
                title="Google Maps Location for Tropical Spa Yelahanka Centre" 
                height="100%" 
              />
            </div>
          </aside>

        </div>

        {/* Real Customer Reviews Section on Location Page */}
        <div style={{ marginTop: '4.5rem' }}>
          <Testimonials 
            title="Real Experiences from Yelahanka Guests"
            subtitle="Read why local residents trust Tropical Spa for hygiene, expert therapists, and peaceful escapes."
          />
        </div>

      </div>
    </div>
  );
};

export default LocationYelahanka;
