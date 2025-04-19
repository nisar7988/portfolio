import { motion } from 'framer-motion';
import React from 'react';

const MovingL = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        position: 'absolute',
        top: 30,
        left: 10,
        width: '100px',
        height: '100px',
        zIndex: 11,
        pointerEvents: 'none',
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M20 20V80H80" 
          stroke="#0066ff"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            stroke: ["#0066ff", "#ff0000", "#0066ff"] // Optional: Add color animation
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            stroke: { duration: 4, repeat: Infinity } // For color animation
          }}
        />
      </svg>
    </motion.div>
  );
};

export default MovingL;