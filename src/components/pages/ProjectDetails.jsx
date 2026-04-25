import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaAndroid,
  FaArrowLeft,
  FaPlay,
  FaLayerGroup,
  FaServer,
  FaLink,
  FaLock,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";
import projectsData from "../../data/projects.json";
import { Colors } from "../../constants/colors";

const archItems = [
  {
    key: "stateManagement",
    label: "State Management",
    icon: <FaLayerGroup className="text-blue-400" />,
  },
  {
    key: "backendStructure",
    label: "Backend Structure",
    icon: <FaServer className="text-purple-400" />,
  },
  {
    key: "apiDesign",
    label: "API Design",
    icon: <FaLink className="text-pink-400" />,
  },
  {
    key: "authentication",
    label: "Authentication",
    icon: <FaLock className="text-yellow-400" />,
  },
  {
    key: "deployment",
    label: "Deployment",
    icon: <FaRocket className="text-green-400" />,
  },
];

const ProjectDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { id } = useParams();
  const project = projectsData.projects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gray-900">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Background Gradient */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${Colors.gradients.secondary}, transparent 70%)`,
        }}
      />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Full screen view"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 p-4 sm:p-6 z-50 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent"
      >
        <Link
          to="/"
          className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 hover:bg-white/10 transition-all text-sm font-medium backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-white/5"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20 container mx-auto max-w-6xl pb-24 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-6 text-white tracking-tight drop-shadow-2xl">
              {project.title}
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-lg"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 py-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-lg shadow-2xl"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
                Overview
              </h2>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed whitespace-pre-line font-light">
                {project.longDescription || project.description}
              </p>
            </motion.section>

            {/* Features */}
            {project.features && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-10 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                  Key Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="flex items-start gap-4 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-purple-500/10 hover:border-white/20 transition-all group"
                    >
                      <FaCheckCircle className="text-purple-400 text-xl flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 font-medium leading-relaxed">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            <motion.section
              className="w-full lg:w-screen max-w-7xl -lg:mx-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="w-10 h-1.5 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></span>
                Gallery
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {project.gallery.map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl cursor-zoom-in group"
                    onClick={() => setSelectedImage(img)}
                  >
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity z-10" />

                    <img
                      src={img}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Video Demo */}
            {project.videoUrl && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-10 h-1.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></span>
                  Project Demo
                </h2>
                <div className="aspect-video w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group bg-black">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 to-transparent">
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-col items-center gap-6 group-hover:scale-110 transition-transform duration-500"
                    >
                      <div className="w-24 h-24 rounded-full bg-red-600/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.5)] group-hover:shadow-[0_0_60px_rgba(220,38,38,0.8)] transition-shadow">
                        <FaPlay className="ml-2 text-white text-4xl" />
                      </div>
                      <span className="text-xl font-bold text-white tracking-wide">
                        Watch Demo Video
                      </span>
                    </a>
                  </div>
                </div>
              </motion.section>
            )}

            {/* Architecture Section */}
            {project.architecture && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-10 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                  Architecture Deep-Dive
                </h2>
                <p className="text-gray-400 text-base mb-8 leading-relaxed max-w-2xl">
                  Detailed breakdown of the technical decisions and systemic
                  design patterns used to build this product.
                </p>
                <div className="grid gap-6">
                  {archItems.map(
                    ({ key, label, icon }) =>
                      project.architecture[key] && (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent hover:bg-white/[0.05] hover:border-white/20 transition-all shadow-xl group"
                        >
                          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                            {icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-white mb-2">
                              {label}
                            </h4>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                              {project.architecture[key]}
                            </p>
                          </div>
                        </motion.div>
                      ),
                  )}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              {/* Actions Card */}
              <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">
                  Project Links
                </h3>

                <div className="space-y-4">
                  {project.apkLink && (
                    <a
                      href={project.apkLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1 group"
                    >
                      <FaAndroid className="text-2xl group-hover:rotate-12 transition-transform" />
                      <span>Download APK</span>
                    </a>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:-translate-y-1 group"
                    >
                      <FaExternalLinkAlt className="group-hover:scale-110 transition-transform" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-3 w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold transition-all border border-white/10 hover:border-white/30 hover:-translate-y-1 group backdrop-blur-sm"
                    >
                      <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                      <span>View Source</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Tech Stack Details */}
              <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl">
                <h3 className="text-xl font-bold mb-6 text-white">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm font-medium bg-black/40 rounded-xl text-gray-300 border border-white/10 hover:border-white/30 hover:text-white transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
