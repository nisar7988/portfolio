import { motion } from 'framer-motion';
import { Colors } from '../../constants/colors';
import aboutData from '../../data/about.json';

const About = () => {
  return (
    <section className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
          style={{ color: Colors.text.primary }}
        >
          About Me
        </motion.h2>
        
        <div className="space-y-8">
          {/* Description Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-6" style={{ color: Colors.text.secondary }}>
              {aboutData.description}
            </p>
          </motion.div>

          {/* Skills Section */}
          <div className="space-y-8">
            {aboutData.skills.map((skillGroup, groupIndex) => (
              <div key={skillGroup.category}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: Colors.accent.blue }}>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-4 py-2 rounded-full"
                      style={{ 
                        backgroundColor: Colors.background.secondary,
                        border: `1px solid ${Colors.accent.blue}`
                      }}
                    >
                      <span style={{ color: Colors.text.primary }}>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;