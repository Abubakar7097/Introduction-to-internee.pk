import React from 'react';
import { Code2, Box, Activity, Brain, Cpu, Terminal } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { TECH_INTERESTS, STATS } from '../data/profile';
import './Interests.css';

const ICONS = {
  code: <Code2 size={22} />,
  box: <Box size={22} />,
  activity: <Activity size={22} />,
  brain: <Brain size={22} />,
  cpu: <Cpu size={22} />,
  terminal: <Terminal size={22} />,
};

export default function Interests() {
  const ref = useIntersectionObserver();

  return (
    <section className="section interests" id="interests" ref={ref}>
      <div className="container">
        <div className="fade-in">
          <span className="section-eyebrow">Tech Interests</span>
          <h2 className="section-title">Tools in the <span>Toolbox</span></h2>
          <p className="section-sub">
            A working stack that spans mechanical design software and modern
            web development — built through internships, courses, and self-study.
          </p>
        </div>

        <div className="interests__grid">
          {TECH_INTERESTS.map((item, i) => (
            <div key={item.title} className={`interest-card fade-in fade-in-delay-${(i % 6) + 1}`}>
              <div className="interest-card__icon">{ICONS[item.iconKey]}</div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Stats strip — spec sheet style */}
        <div className="interests__specs fade-in fade-in-delay-3">
          <div className="interests__specs-label part-tag">SPEC SHEET —</div>
          <div className="interests__specs-grid">
            {STATS.map((s) => (
              <div key={s.label} className="interests__spec">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
