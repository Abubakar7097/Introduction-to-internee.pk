import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { CERTIFICATES, RESEARCH_GRANT } from '../data/profile';
import './Achievements.css';

export default function Achievements() {
  const ref = useIntersectionObserver();
  const [active, setActive] = useState(null); // index into CERTIFICATES

  const close = () => setActive(null);
  const prev = (e) => { e.stopPropagation(); setActive((a) => (a - 1 + CERTIFICATES.length) % CERTIFICATES.length); };
  const next = (e) => { e.stopPropagation(); setActive((a) => (a + 1) % CERTIFICATES.length); };

  return (
    <section className="section achievements" id="achievements" ref={ref}>
      <div className="blueprint-grid blueprint-grid--fine" aria-hidden="true" />
      <div className="container">
        <div className="fade-in">
          <span className="section-eyebrow">Achievements & Certificates</span>
          <h2 className="section-title">Proof of <span>Work</span></h2>
          <p className="section-sub">
            {CERTIFICATES.length} certificates and awards from CUST, IEEE, ASHRAE,
            Dublin City University and industry training programs. Tap any card to enlarge.
          </p>
        </div>

        {/* Featured research grant callout */}
        <div className="achievements__grant fade-in fade-in-delay-1">
          <div className="achievements__grant-code part-tag">GRANT REF. {RESEARCH_GRANT.code}</div>
          <h3>{RESEARCH_GRANT.title}</h3>
          <p>{RESEARCH_GRANT.body}</p>
          <div className="achievements__grant-meta">
            <span><strong>Amount:</strong> {RESEARCH_GRANT.amount}</span>
            <span><strong>Supervisor:</strong> {RESEARCH_GRANT.supervisor}</span>
            <span><strong>Team:</strong> {RESEARCH_GRANT.team}</span>
          </div>
        </div>

        <div className="achievements__grid">
          {CERTIFICATES.map((cert, i) => (
            <button
              key={cert.file}
              className={`cert-card fade-in fade-in-delay-${(i % 6) + 1}`}
              onClick={() => setActive(i)}
            >
              <div className="cert-card__img-wrap">
                <img src={`${process.env.PUBLIC_URL}/certs/${cert.file}`} alt={cert.title} loading="lazy" />
                <div className="cert-card__overlay">
                  <ExternalLink size={18} />
                </div>
              </div>
              <div className="cert-card__body">
                <span className="cert-card__year">{cert.year}</span>
                <h4>{cert.title}</h4>
                <p>{cert.org}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lightbox__close" onClick={close} aria-label="Close"><X size={22} /></button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Previous"><ChevronLeft size={26} /></button>

          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={`${process.env.PUBLIC_URL}/certs/${CERTIFICATES[active].file}`} alt={CERTIFICATES[active].title} />
            <div className="lightbox__caption">
              <h4>{CERTIFICATES[active].title}</h4>
              <p>{CERTIFICATES[active].org} · {CERTIFICATES[active].year}</p>
            </div>
          </div>

          <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Next"><ChevronRight size={26} /></button>
        </div>
      )}
    </section>
  );
}
