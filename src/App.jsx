import React, { useRef } from 'react';
import HomePage from './components/HomePage';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import MovingL from './components/MovingTriangle';

const App = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundBrightness = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen overflow-x-hidden bg-white"
      style={{
        scrollbarWidth: 'none', // For Firefox
        msOverflowStyle: 'none', // For IE/Edge
      }}
    >
      {/* Scroll progress indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 origin-[0%] z-50"
        style={{ scaleX: useSpring(scrollYProgress) }} 
      />
      <MovingL />

      {/* Content */}
      <div className="relative z-10">
        <HomePage />
      </div>
    </div>
  );
};

export default App;