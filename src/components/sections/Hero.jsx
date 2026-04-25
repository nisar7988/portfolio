import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Colors } from "../../constants/colors";
import { WaterDrops } from "../ui/meteors";
import { FaDownload } from "react-icons/fa";
import aboutData from "../../data/about.json";

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
        {/* Open to Work Badge */}
        {aboutData.openToWork && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
            style={{
              background: "rgba(34, 197, 94, 0.1)",
              borderColor: "rgba(34, 197, 94, 0.3)",
              color: "#22c55e",
            }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-green-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-sm font-medium">
              Open to Full Stack / React Native Developer roles
            </span>
          </motion.div>
        )}

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
          className="text-xl mb-10 mt-4"
          style={{ color: Colors.text.secondary }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Full Stack Developer · React.js · React Native · Node.js
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              offset={-50}
              className="px-8 py-3 rounded-full font-semibold cursor-pointer inline-block transition-all duration-300"
              style={{
                background: Colors.accent.blue,
                color: Colors.text.primary,
                textDecoration: "none",
                boxShadow: `0 0 20px ${Colors.accent.blue}40`,
              }}
            >
              View My Work
            </Link>
          </motion.div>

          {aboutData.resumeUrl && (
            <motion.a
              href={aboutData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 cursor-pointer transition-all duration-300"
              style={{
                background: "transparent",
                color: Colors.text.primary,
                border: `1px solid rgba(255,255,255,0.25)`,
                textDecoration: "none",
              }}
            >
              <FaDownload size={14} />
              Download Resume
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
