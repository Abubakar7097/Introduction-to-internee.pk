import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ACADEMIC } from '../data/profile';
import './Academic.css';

export default function Academic() {
  const ref = useIntersectionObserver();

  return (
    <section className="section academic" id="academics" ref={ref}>
      <div className="blueprint-grid blueprint-grid--fine" aria-hidden="true" />
      <div className="container">
        <div className="fade-in">
          <span className="section-eyebrow">Academic Background</span>
          <h2 className="section-title">The <span>Blueprint</span> So Far</h2>
          <p className="section-sub">
            From a bronze-medal mechanical engineering degree to a smart
            manufacturing MS — every stage built the next.
          </p>
        </div>

        <div className="academic__timeline">
          {ACADEMIC.map((item, i) => (
            <div key={item.degree} className={`academic__card fade-in fade-in-delay-${i + 1}`}>
              <div className="academic__card-top">
                <div className="academic__icon">
                  {i === 0 ? <GraduationCap size={22} /> : <Award size={22} />}
                </div>
                <span className={`academic__tag academic__tag--${item.tag.toLowerCase()}`}>{item.tag}</span>
              </div>
              <h3 className="academic__degree">{item.degree}</h3>
              <p className="academic__focus">{item.focus}</p>
              <p className="academic__school">{item.school}</p>
              <p className="academic__detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
