import { motion } from 'framer-motion';
import { Colors } from '../../constants/colors';
import aboutData from '../../data/about.json';

const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="text-center p-6 rounded-2xl flex-1 min-w-[120px]"
    style={{
      background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.08))',
      border: `1px solid ${Colors.accent.blue}40`
    }}
  >
    <p className="text-4xl font-bold mb-1" style={{ color: Colors.accent.blue }}>
      {stat.value}
    </p>
    <p className="text-sm" style={{ color: Colors.text.secondary }}>{stat.label}</p>
  </motion.div>
);

const About = () => {
  const coreSkills = aboutData.skills.filter(s => s.tier === 'core');
  const familiarSkills = aboutData.skills.filter(s => s.tier === 'familiar');

  return (
    <section className="min-h-screen px-4 py-20" id="about">
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

        <div className="space-y-12">

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            {aboutData.stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg leading-relaxed" style={{ color: Colors.text.secondary }}>
              {aboutData.description}
            </p>
          </motion.div>

          {/* Core Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span
                className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                style={{ background: `${Colors.accent.blue}30`, color: Colors.accent.blue, border: `1px solid ${Colors.accent.blue}60` }}
              >
                Core
              </span>
              <p className="text-sm" style={{ color: Colors.text.secondary }}>Technologies I build with daily</p>
            </motion.div>
            <div className="space-y-6">
              {coreSkills.map((skillGroup, groupIndex) => (
                <div key={skillGroup.category}>
                  <h3 className="text-sm font-semibold mb-3 uppercase tracking-widest" style={{ color: Colors.text.secondary }}>
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="px-4 py-2 rounded-full"
                        style={{
                          backgroundColor: Colors.background.secondary,
                          border: `1px solid ${Colors.accent.blue}`,
                          boxShadow: `0 0 8px ${Colors.accent.blue}20`
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

          {/* Familiar Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span
                className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                style={{ background: 'rgba(255,255,255,0.05)', color: Colors.text.secondary, border: '1px solid rgba(255,255,255,0.2)' }}
              >
                Familiar
              </span>
              <p className="text-sm" style={{ color: Colors.text.secondary }}>Tools I'm comfortable working with</p>
            </motion.div>
            <div className="space-y-6">
              {familiarSkills.map((skillGroup, groupIndex) => (
                <div key={skillGroup.category}>
                  <h3 className="text-sm font-semibold mb-3 uppercase tracking-widest" style={{ color: Colors.text.secondary }}>
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="px-4 py-2 rounded-full"
                        style={{
                          backgroundColor: Colors.background.secondary,
                          border: '1px solid rgba(255,255,255,0.15)'
                        }}
                      >
                        <span style={{ color: Colors.text.secondary }}>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4" style={{ color: Colors.text.primary }}>
              What I bring to the table
            </h3>
            <div className="flex flex-wrap gap-3">
              {aboutData.performanceHighlights.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.08))',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: Colors.text.secondary
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: Colors.accent.blue }} />
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;