import React from 'react';
import { testimonialsData } from '../config/testimonialsData';
import { spaConfig } from '../config/spaConfig';

export const Testimonials = ({ 
  title = "What Our Guests Say", 
  subtitle = "Genuine experiences from verified guests who visited Tropical Spa Yelahanka." 
}) => {
  const { business } = spaConfig;

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="page-container" style={{ padding: 0 }}>
        
        <div className="section-header-center">
          <div className="testimonials-pill-badge">
            <span style={{ color: '#f59e0b', fontSize: '1rem', marginRight: '0.35rem' }}>★</span>
            Verified Guest Experiences
          </div>
          <h2 id="testimonials-heading">{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <article key={item.id} className="testimonial-card">
              {/* Star Rating & Badge */}
              <div className="testimonial-card-header">
                <div className="stars-row" aria-label={`${item.rating} out of 5 stars`}>
                  {"★".repeat(item.rating)}
                </div>
                <span className="testimonial-source-badge">{item.source}</span>
              </div>

              {/* Highlight Tag */}
              <div className="testimonial-highlight-tag">
                {item.tag}
              </div>

              {/* Review Quote Body */}
              <p className="testimonial-quote-text">
                &ldquo;{item.review}&rdquo;
              </p>

              {/* Author & Therapist Callout */}
              <div className="testimonial-footer">
                <div className="testimonial-author-avatar">
                  {item.author.charAt(0)}
                </div>
                <div className="testimonial-author-meta">
                  <span className="testimonial-author-name">{item.author}</span>
                  {item.therapist && (
                    <span className="testimonial-therapist-badge">
                      Therapist: <strong>{item.therapist}</strong>
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Google Reviews Verification Strip */}
        <div className="testimonials-verify-strip">
          <div className="verify-strip-text">
            <span>Read more reviews on our official profile</span>
            <strong>Rated 5.0 on Google</strong>
          </div>
          <a 
            href={business.socialLinks?.googleProfile || business.googleMapsPlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="verify-google-btn"
            aria-label="View Tropical Spa reviews on Google Maps"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M12 11.5v3.6h5.8c-.3 1.5-1.7 4.4-5.8 4.4-3.5 0-6.4-2.9-6.4-6.5s2.9-6.5 6.4-6.5c2 0 3.3.8 4.1 1.6l2.8-2.7C16.8 3.3 14.6 2.4 12 2.4 6.7 2.4 2.4 6.7 2.4 12s4.3 9.6 9.6 9.6c5.5 0 9.2-3.9 9.2-9.4 0-.6-.1-1.1-.2-1.7H12z"/>
            </svg>
            Verify on Google Profile &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
