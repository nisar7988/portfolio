import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaAndroid, FaArrowLeft, FaPlay } from 'react-icons/fa';
import projectsData from '../../data/projects.json';
import { Colors } from '../../constants/colors';

const ProjectDetails = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const { id } = useParams();
    const project = projectsData.projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-gray-900">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
                    <Link to="/" className="text-blue-400 hover:text-blue-300">Return Home</Link>
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
                    background: `radial-gradient(circle at 50% 50%, ${Colors.gradients.secondary}, transparent 70%)`
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
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
            <nav className="fixed top-0 left-0 right-0 p-6 z-50 flex justify-between items-center backdrop-blur-md bg-black/20">
                <Link
                    to="/"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-sm font-medium backdrop-blur-md border border-white/10"
                >
                    <FaArrowLeft /> Back to Projects
                </Link>
            </nav>

            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 container mx-auto max-w-6xl pb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-3"
                    >
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-sm"
                            >
                                {tech}
                            </span>
                        ))}
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
                        >
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                                Overview
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
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
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
                                    Key Features
                                </h2>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                                            <span className="text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.section>
                        )}

                        {/* Gallery */}
                        {project.gallery && project.gallery.length > 0 && (
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-pink-500 rounded-full"></span>
                                    Gallery
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.gallery.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt={`Screenshot ${index + 1}`}
                                            className="rounded-xl w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500 border border-white/10 cursor-zoom-in"
                                            onClick={() => setSelectedImage(img)}
                                        />
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {/* Video Demo */}
                        {project.videoUrl && (
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="w-full"
                            >
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-red-500 rounded-full"></span>
                                    Project Demo
                                </h2>
                                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group bg-black">
                                    {/* Placeholder for video embedding - assuming simple link or iframe logic if needed */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <a href={project.videoUrl} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-4 group-hover:scale-110 transition-transform">
                                            <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/30">
                                                <FaPlay className="ml-1 text-white text-3xl" />
                                            </div>
                                            <span className="text-lg font-medium text-gray-300">Watch Demo Video</span>
                                        </a>
                                    </div>
                                    {/* If actually embedding:
                     <iframe src={project.videoUrl} className="w-full h-full" ... />
                     */}
                                </div>
                            </motion.section>
                        )}

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">

                            {/* Actions Card */}
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-4">
                                <h3 className="text-xl font-semibold mb-4 text-white">Project Links</h3>

                                {project.apkLink && (
                                    <a
                                        href={project.apkLink}
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-green-600/20 group"
                                    >
                                        <FaAndroid className="text-xl group-hover:scale-110 transition-transform" />
                                        Download APK
                                    </a>
                                )}

                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                )}

                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 w-full py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all border border-gray-700"
                                    >
                                        <FaGithub className="text-xl" /> View Source
                                    </a>
                                )}
                            </div>

                            {/* Tech Stack Details */}
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                                <h3 className="text-xl font-semibold mb-4 text-white">Technolgies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="px-3 py-1.5 text-sm md:text-xs lg:text-sm bg-gray-800 rounded-lg text-gray-300 border border-gray-700">
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
