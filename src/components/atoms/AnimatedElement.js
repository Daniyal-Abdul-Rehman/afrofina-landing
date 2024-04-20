'use client'
import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedElement = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animate only once
    threshold: 0,  // Trigger when 50% of the element is in view
  });

  return (
    <div
      ref={ref}
      className={`transition-transform duration-1000 ease-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;