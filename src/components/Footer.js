import React from 'react';
import { Github, Linkedin, Youtube, Instagram, Mail, ExternalLink, Cog } from 'lucide-react';
import { PROFILE } from '../data/profile';
import './Footer.css';

const SOCIALS = [
  { icon: <Github size={18} />, label: 'GitHub', href: PROFILE.github },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', href: PROFILE.linkedin },
  { icon: <Youtube size={18} />, label: 'YouTube', href: PROFILE.youtube },
  { icon: <Instagram size={18} />, label: 'Instagram', href: PROFILE.instagram },
];

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="blueprint-grid blueprint-grid--fine" aria-hidden="true" />
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <Cog size={20} className="footer__logo-icon" />
              {PROFILE.name}
            </div>
            <p className="footer__tag">
              Mechanical Engineer · MS Smart Manufacturing (NUST-CEME) · Frontend Intern @ Internee.pk
            </p>

            <div className="footer__socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="footer__social" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__links-col">
            <h4>Work</h4>
            <a href={PROFILE.portfolio} target="_blank" rel="noreferrer">Full Portfolio <ExternalLink size={12} /></a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub Projects <ExternalLink size={12} /></a>
            <a href={PROFILE.fiverr} target="_blank" rel="noreferrer">Fiverr Gigs <ExternalLink size={12} /></a>
            <a href={PROFILE.upwork} target="_blank" rel="noreferrer">Upwork Profile <ExternalLink size={12} /></a>
          </div>

          <div className="footer__links-col">
            <h4>Contact</h4>
            <a href={`mailto:${PROFILE.email}`}><Mail size={13} /> {PROFILE.email}</a>
            <a href={PROFILE.cv} target="_blank" rel="noreferrer">Download CV <ExternalLink size={12} /></a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>Built with React + Three.js for the Internee.pk Frontend Internship.</span>
          <span className="part-tag">REV. 2026-07 · SHEET 1 OF 1</span>
        </div>
      </div>
    </footer>
  );
}
