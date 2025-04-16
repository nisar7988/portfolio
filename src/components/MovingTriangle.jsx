import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const MovingTriangle = () => {
  const { scrollYProgress } = useScroll();
  
  const x = useTransform(scrollYProgress, [0, 1], ["10vw", "70vw"]);
  const y = useTransform(scrollYProgress, [0, 1], ["10vh", "70vh"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100px',
        height: '100px',
        x,
        y,
        rotate,
        zIndex: 11  ,
        pointerEvents: 'none',
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M50 10L90 90H10L50 10Z"
          stroke="#0066ff"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  );
};

export default MovingTriangle;
