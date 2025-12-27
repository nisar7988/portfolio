import { Colors } from '../../constants/colors';
import projectsData from '../../data/projects.json';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl overflow-hidden backdrop-blur-md hover:shadow-2xl transition-all duration-500"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))',
        border: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <div className="relative overflow-hidden h-48 group">
        <Link to={`/project/${project.id}`}>
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          )}
          {/* Overlay for indication */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-semibold backdrop-blur-md px-4 py-2 rounded-full bg-white/10 border border-white/20">View Details</span>
          </div>
        </Link>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <Link to={`/project/${project.id}`}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              {project.title}
            </h3>
          </Link>
          <div className="flex gap-3">
            {project.link && (
              <a href={project.link} target="_blank" className="text-blue-500 cursor-pointer transition-colors hover:text-purple-600 duration-300" title="Live Demo">
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
        </div>
        <p className="mb-4" style={{ color: Colors.text.secondary }}>
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap">
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
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
          style={{ color: Colors.text.primary }}
        >
          Featured Projects
        </motion.h2>
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