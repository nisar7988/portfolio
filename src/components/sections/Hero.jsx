import { motion } from 'framer-motion';
import { Colors } from '../../constants/colors';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Nisar Ahmed";

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    
    const interval = setInterval(() => {
      if (!isDeleting && currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
        if (currentIndex > fullText.length) {
          isDeleting = true;
          setTimeout(() => {
            currentIndex = fullText.length;
          }, 1500); // Pause at full text
        }
      } else if (isDeleting) {
        setText(fullText.slice(0, currentIndex - 1));
        currentIndex--;
        if (currentIndex <= 0) {
          isDeleting = false;
          currentIndex = 0;
          // No clearInterval here, let it continue
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1 
          className="text-6xl font-bold mb-6"
          style={{ color: Colors.text.primary }}
        >
          Hello, I'm <span style={{ color: Colors.accent.blue }}>{text}</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            style={{ color: Colors.accent.blue }}
          >|</motion.span>
        </motion.h1>
        <motion.p 
          className="text-xl mb-8"
          style={{ color: Colors.text.secondary }}
        >
          Full Stack Developer | UI/UX Enthusiast | Problem Solver
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full font-semibold cursor-pointer"
          style={{ 
            background: Colors.accent.blue,
            color: Colors.text.primary
          }}
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;