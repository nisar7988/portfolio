import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectDetails from './components/pages/ProjectDetails';
import { useScroll, useSpring } from 'framer-motion';
import { motion } from 'framer-motion'
import Thunder from './components/ui/Thunder';

const App = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });



  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-x-hidden bg-white"
      style={{
        scrollbarWidth: 'none', // For Firefox
        msOverflowStyle: 'none', // For IE/Edge
      }}
    >
      {/* Thunder Animation */}
      <Thunder />

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 origin-[0%] z-50"
        style={{ scaleX: useSpring(scrollYProgress) }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;