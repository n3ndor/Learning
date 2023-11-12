"use client"

import { useEffect } from 'react';
import gsap from 'gsap';

const AnimatedBox = () => {
  useEffect(() => {
      gsap.to('.box', { rotation: 360, duration: 2 });
  }, []);

  return <div className='box' style={{ width: '100px', height: '100px', backgroundColor: 'blue' }}></div>;
};

export default AnimatedBox;
