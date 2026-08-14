import React from 'react';
import { Heart, Target, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './ThankYouGoals.css';

const GOALS = [
  'Ship a production-grade React feature during this internship that internee.pk actually keeps using.',
  'Bridge my CAD/FEA background with frontend skills — building tools that visualize engineering data on the web.',
  'Contribute to my MS research in Smart Manufacturing by learning to build the dashboards and interfaces that smart factories run on.',
  'Grow "Blueprint Bazaar" into a resource that helps other mechanical engineering students learn CAD and code side by side.',
];

export default function ThankYouGoals() {
  const ref = useIntersectionObserver();

  return (
    <section className="section thanks" id="goals" ref={ref}>
      <div className="blueprint-grid blueprint-grid--fine" aria-hidden="true" />
      <div className="container thanks__inner">
        {/* Thank you */}
        <div className="thanks__card fade-in">
          <div className="thanks__icon"><Heart size={22} /></div>
          <span className="section-eyebrow">A Quick Thank You</span>
          <h3>To the Internee.pk Team</h3>
          <p>
            Thank you for building a platform that actually hands students real
            tasks instead of just tutorials. Redesigning this site as my React
            assignment pushed me to think like a product developer, not just a
            student following instructions — and that shift is exactly what
            I came here for. Grateful for the structure, the feedback, and the
            chance to prove what I can build.
          </p>
        </div>

        {/* Future goals */}
        <div className="thanks__card fade-in fade-in-delay-2">
          <div className="thanks__icon thanks__icon--accent"><Target size={22} /></div>
          <span className="section-eyebrow">Future Goals</span>
          <h3>What I'm Working Toward</h3>
          <ul className="thanks__goals">
            {GOALS.map((g) => (
              <li key={g}>
                <ArrowRight size={15} />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
