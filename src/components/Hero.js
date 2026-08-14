import React from 'react';
import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';
import { PROFILE } from '../data/profile';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="blueprint-grid" aria-hidden="true" />
      <div className="hero__corner hero__corner--tl" aria-hidden="true" />
      <div className="hero__corner hero__corner--br" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__doc-tag">
            <span>DWG NO. INTERNEE-2026-001</span>
            <span>SCALE 1:1</span>
          </div>

          <p className="part-tag hero__label">/ INTRODUCTION — internee.pk /</p>

          <h1 className="hero__name">
            {PROFILE.name}
          </h1>
          <p className="hero__nickname">
            goes by <span>"{PROFILE.nickname}"</span>
          </p>

          <p className="hero__tagline">
            Mechanical Engineer turned frontend builder — I design the parts,
            then design the interface that shows them off. Currently pursuing
            an MS in Smart Manufacturing while interning as a React developer
            at Internee.pk.
          </p>

          <div className="hero__actions">
            <a className="btn-primary" href={PROFILE.github} target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub Profile
            </a>
            <a className="btn-secondary" href={PROFILE.portfolio} target="_blank" rel="noreferrer">
              Full Portfolio <ArrowRight size={15} />
            </a>
          </div>

          <div className="hero__quick-links">
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a href={PROFILE.cv} target="_blank" rel="noreferrer"><Download size={16} /> Download CV</a>
          </div>
        </div>

        <div className="hero__scene">
          <Hero3DCanvas />
          <div className="hero__scene-caption">
            <span className="part-tag">FIG. 01 — GEAR ASSEMBLY, INTERACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
