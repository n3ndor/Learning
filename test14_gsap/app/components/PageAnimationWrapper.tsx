
"use client"

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

interface PageAnimationWrapperProps {
  children: React.ReactNode;
}

const PageAnimationWrapper: React.FC<PageAnimationWrapperProps> = ({ children }) => {
  gsap.registerPlugin(ScrollToPlugin);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentSectionRef = useRef<number>(0);
  const isScrollingRef = useRef<boolean>(false);

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      if (isScrollingRef.current || !containerRef.current) return;
      isScrollingRef.current = true;
      setTimeout(() => (isScrollingRef.current = false), 1000);

      let newSection = currentSectionRef.current;
      if (e.deltaY < 0 && newSection > 0) {
        newSection--;
      } else if (e.deltaY > 0 && newSection < 4) {
        newSection++;
      }

      if (newSection !== currentSectionRef.current) {
        let scrollToOptions = { x: 0, y: 0 };
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        switch (newSection) {
          case 1:
            scrollToOptions.y = viewportHeight;
            break;
          case 2:
            scrollToOptions.x = viewportWidth;
            scrollToOptions.y = viewportHeight;
            break;
          case 3:
            scrollToOptions.x = viewportWidth * 2;
            scrollToOptions.y = viewportHeight;
            break;
          case 4:
            scrollToOptions.x = viewportWidth * 2;
            scrollToOptions.y = viewportHeight * 2;
            break;
        }

        gsap.to(window, { scrollTo: scrollToOptions, duration: 1, ease: 'power2.inOut' });
        currentSectionRef.current = newSection;
      }
    };

    window.addEventListener('wheel', wheelHandler, { passive: false });
    return () => window.removeEventListener('wheel', wheelHandler);
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{
        display: 'grid',
        gridTemplateRows: '100vh 100vh 100vh',
        gridTemplateColumns: '100vw 100vw 100vw',
        gridTemplateAreas: `
          "page1 page1 page1"
          "page2 page3 page4"
          ". . page5"
        `
      }}
    >
      {children}
    </div>
  );
};

export default PageAnimationWrapper;
