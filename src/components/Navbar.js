import React, { useState, useEffect } from 'react';
import { Menu, X, Cog } from 'lucide-react';
import './Navbar.css';

const LINKS = [
  { label: 'Academics', href: '#academics' },
  { label: 'Interests', href: '#interests' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Goals', href: '#goals' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a className="nav__logo" href="#top" onClick={(e) => { e.preventDefault(); go('#top'); }}>
          <Cog size={18} className="nav__logo-icon" />
          M.Abubakar
        </a>

        <ul className="nav__links">
          {LINKS.map((l) => (
            <li key={l.label}><button onClick={() => go(l.href)}>{l.label}</button></li>
          ))}
        </ul>

        <button className="nav__cta" onClick={() => go('#contact')}>
          Connect
        </button>

        <button className="nav__burger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'nav__mobile--open' : ''}`}>
        {LINKS.map((l) => (
          <button key={l.label} onClick={() => go(l.href)}>{l.label}</button>
        ))}
        <button className="nav__mobile-cta" onClick={() => go('#contact')}>Connect</button>
      </div>
    </nav>
  );
}
