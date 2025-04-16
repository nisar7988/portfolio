import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Colors } from '../../constants/colors';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Nisar Ahmed";

  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        // Reset to start the animation again
        currentIndex = 0;
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            offset={-50}
            className="px-8 py-3 rounded-full font-semibold cursor-pointer inline-block"
            style={{ 
              background: Colors.accent.blue,
              color: Colors.text.primary,
              textDecoration: 'none'
            }}
          >
            View My Work
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;