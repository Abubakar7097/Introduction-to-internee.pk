import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { HOBBIES } from '../data/profile';
import './Hobbies.css';

export default function Hobbies() {
  const ref = useIntersectionObserver();

  return (
    <section className="section hobbies" id="hobbies" ref={ref}>
      <div className="container">
        <div className="fade-in">
          <span className="section-eyebrow">Beyond the Workbench</span>
          <h2 className="section-title">Hobbies & <span>Interests</span></h2>
          <p className="section-sub">
            Engineering fills most of the day — here's what fills the rest of it.
          </p>
        </div>

        <div className="hobbies__grid">
          {HOBBIES.map((h, i) => (
            <div key={h.title} className={`hobby-card fade-in fade-in-delay-${i + 1}`}>
              <span className="hobby-card__emoji">{h.emoji}</span>
              <h3>{h.title}</h3>
              <p>{h.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
