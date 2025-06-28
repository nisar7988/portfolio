import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Colors } from '../../constants/colors';
import { WaterDrops } from "../ui/meteors";
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-wrap items-center justify-center px-4 relative overflow-hidden">
        <WaterDrops number={20} />
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
          <span>Hello, I'm </span>  
          <motion.span
            style={{ color: Colors.accent.blue }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Nisar Ahmed
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-8 mt-4"
          style={{ color: Colors.text.secondary }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Full Stack Developer | UI/UX Enthusiast | Problem Solver
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
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