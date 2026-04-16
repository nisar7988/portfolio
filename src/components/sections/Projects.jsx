import { Colors } from '../../constants/colors';
import projectsData from '../../data/projects.json';
import { FaExternalLinkAlt, FaGithub, FaAndroid } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -6 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl overflow-hidden backdrop-blur-md transition-all duration-500 flex flex-col relative mt-4"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 8px 40px ${Colors.accent.blue}35`;
        e.currentTarget.style.border = `1px solid ${Colors.accent.blue}50`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
        e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)';
      }}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-3 left-3 z-10">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{
              background: 'linear-gradient(135deg, #0047AB, #7d3cff)',
              color: '#fff',
              boxShadow: '0 2px 12px rgba(0,71,171,0.5)'
            }}
          >
            ⭐ Featured
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden h-48 group">
        <Link to={`/project/${project.id}`}>
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          )}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-semibold backdrop-blur-md px-4 py-2 rounded-full bg-white/10 border border-white/20">
              View Case Study →
            </span>
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title + Links */}
        <div className="flex justify-between items-start mb-3">
          <Link to={`/project/${project.id}`}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              {project.title}
            </h3>
          </Link>
          <div className="flex gap-3 mt-1">
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="transition-colors duration-300"
                style={{ color: Colors.text.secondary }}
                title="View Source"
                onClick={e => e.stopPropagation()}
              >
                <FaGithub size={18} />
              </motion.a>
            )}
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-blue-400 transition-colors hover:text-purple-400 duration-300"
                title="Live Demo"
                onClick={e => e.stopPropagation()}
              >
                <FaExternalLinkAlt size={16} />
              </motion.a>
            )}
            {project.apkLink && (
              <motion.a
                href={project.apkLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-green-400 transition-colors hover:text-green-300 duration-300"
                title="Download APK"
                onClick={e => e.stopPropagation()}
              >
                <FaAndroid size={18} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mb-3 text-sm leading-relaxed" style={{ color: Colors.text.secondary }}>
          {project.description}
        </p>


        {/* Key Features preview */}
        {project.features && (
          <ul className="mb-4 space-y-1">
            {project.features.slice(0, 2).map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-xs" style={{ color: Colors.text.secondary }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: Colors.accent.blue }} />
                {f}
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack */}
        <div className="flex gap-2 flex-wrap mt-auto">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-sm backdrop-blur-md"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))',
                border: '1px solid rgba(255,255,255,0.1)',
                color: Colors.text.primary
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="min-h-screen px-4 py-20" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2
            className="text-4xl font-bold"
            style={{ color: Colors.text.primary }}
          >
            Featured Projects
          </h2>
          <p className="mt-3 text-sm" style={{ color: Colors.text.secondary }}>
            Case studies — each solving a real problem with a thoughtful technical approach.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
