import { useEffect, useRef } from 'react';

export function useIntersectionObserver(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12, ...options }
    );

    const fadeEls = el.querySelectorAll('.fade-in');
    fadeEls.forEach((child) => observer.observe(child));
    if (el.classList.contains('fade-in')) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
