import { motion } from "framer-motion";
import { Colors } from "../../constants/colors";
import aboutData from "../../data/about.json";

const BentoCard = ({
  children,
  className = "",
  delay = 0,
  glowColor = Colors.accent.blue,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.015 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={`relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.04)] ${className}`}
    style={{
      background:
        "linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
      border: "1px solid rgba(255,255,255,0.05)",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(10px)",
    }}
  >
    {/* Subtle gradient orb for premium feel */}
    <div
      className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40"
      style={{ background: glowColor }}
    />
    <div className="relative z-10 h-full flex flex-col">{children}</div>
  </motion.div>
);

const StatCard = ({ stat, delay, isFullWidth = false }) => (
  <BentoCard
    delay={delay}
    className={`flex flex-col justify-center items-center text-center p-6 group hover:border-white/10 transition-colors ${isFullWidth ? "col-span-2" : "col-span-1"}`}
    glowColor={Colors.accent.blue}
  >
    <motion.h4
      className="text-5xl lg:text-6xl font-extrabold mb-2 tracking-tight"
      style={{ color: Colors.text.primary }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {stat.value}
    </motion.h4>
    <p
      className="text-sm font-semibold tracking-widest uppercase"
      style={{ color: Colors.accent.blue }}
    >
      {stat.label}
    </p>
  </BentoCard>
);
const SkillPill = ({ skill, isSecondary = false }) => (
  <motion.div
    whileHover={{ y: -2 }}
    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all cursor-default flex items-center ${
      isSecondary ? "opacity-70 hover:opacity-100" : ""
    }`}
    style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.08)",
      color: Colors.text.primary,
    }}
  >
    <div
      className="w-1.5 h-1.5 rounded-full mr-2"
      style={{
        background: isSecondary ? "rgba(255,255,255,0.4)" : Colors.accent.blue,
      }}
    />
    {skill}
  </motion.div>
);

const About = () => {
  return (
    <section
      className="min-h-screen px-4 py-24 relative overflow-hidden"
      id="about"
    >
      {/* Background ambient light */}
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: Colors.accent.blue }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{ background: Colors.accent.purple }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold tracking-tight mb-4"
            style={{ color: Colors.text.primary }}
          >
            Behind the Code
          </h2>
          <div
            className="w-24 h-1.5 rounded-full"
            style={{ background: Colors.accent.blue }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Introduction & Highlights - Spans 7 cols */}
          <BentoCard className="md:col-span-12 lg:col-span-7 group" delay={0.1}>
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ color: Colors.text.primary }}
            >
              Hello, I'm{" "}
              <span style={{ color: Colors.accent.blue }}>
                {aboutData.profile.name}
              </span>
            </h3>
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: Colors.text.secondary }}
            >
              {aboutData.description}
            </p>

            <div className="mt-auto pt-8 border-t border-white/5">
              <h4
                className="text-sm font-semibold mb-4 uppercase tracking-widest"
                style={{ color: Colors.text.secondary }}
              >
                Performance Highlights
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {aboutData.performanceHighlights.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium"
                    style={{
                      background: "rgba(0, 71, 171, 0.1)",
                      border: "1px solid rgba(0, 71, 171, 0.2)",
                      color: Colors.text.primary,
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(0,71,171,0.8)]"
                      style={{ background: Colors.accent.blue }}
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Stats Grid - Spans 5 cols */}
          <div className="md:col-span-12 lg:col-span-5 grid grid-cols-2 gap-6 lg:gap-8">
            <StatCard stat={aboutData.stats[0]} delay={0.2} />
            <StatCard stat={aboutData.stats[1]} delay={0.3} />
            {/* Make the 3rd stat take full width of this subgrid */}
            <StatCard
              stat={aboutData.stats[2]}
              delay={0.4}
              isFullWidth={true}
            />
          </div>

          {/* Tech Stack Header */}
          <div className="md:col-span-12 mt-8 mb-2">
            <h3
              className="text-3xl font-bold tracking-tight flex items-center gap-3"
              style={{ color: Colors.text.primary }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke={Colors.accent.blue}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              Tech Stack
            </h3>
            <p
              className="text-sm mt-2"
              style={{ color: Colors.text.secondary }}
            >
              Technologies I build scalable apps with
            </p>
          </div>

          {/* Tech Stack Cards */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
            {aboutData.skills.map((skillGroup, idx) => (
              <BentoCard
                key={skillGroup.category}
                delay={0.3 + idx * 0.1}
                className="group"
                glowColor={Colors.accent.blue}
              >
                <h4
                  className="text-lg font-semibold tracking-tight mb-4"
                  style={{ color: Colors.text.primary }}
                >
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skillGroup.items.map((skill) => {
                    const isSecondary =
                      skillGroup.category === "Backend" &&
                      (skill === "Firebase" || skill === "Supabase");

                    return (
                      <SkillPill
                        key={skill}
                        skill={skill}
                        isSecondary={isSecondary}
                      />
                    );
                  })}
                  {skillGroup.secondaryItems?.map((skill) => (
                    <SkillPill key={skill} skill={skill} isSecondary />
                  ))}
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
