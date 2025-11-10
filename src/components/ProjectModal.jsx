import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Tooltip} from "@mui/material";

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence >
            <motion.div
                className="fixed top-0 left-5 h-full w-full flex justify-center items-center z-50 backdrop-blur-lg pr-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[var(--color-bg)]/95 max-w-3xl w-full overflow-y-auto p-6 rounded-xl shadow-xl text-white relative"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                >
                    <h2 className="text-2xl text-[var(--color-accent)] font-semibold mb-4">
                        {project.title}
                    </h2>

                    <img
                        src={project.coverImage}
                        alt={project.title}
                        className="rounded-lg mb-4 w-full h-full object-fit"
                    />

                    <p className="text-sm text-white/90 mb-4">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-1 text-xs rounded"
                            >
                {t}
              </span>
                        ))}
                    </div>

                    {/* 🔹 Screenshot Gallery Section */}
                    {project.screenshots && project.screenshots.length > 0 && (
                        <>
                            <h3 className="text-xl font-semibold mb-3 text-[var(--color-accent)]">
                                Screenshots
                            </h3>
                            <div className="w-full overflow-x-auto flex gap-4 pb-3 scrollbar-thin scrollbar-thumb-[var(--color-accent)]/40">
                                {project.screenshots.map((src, idx) => (
                                    <img
                                        key={idx}
                                        src={src}
                                        alt={`screenshot-${idx}`}
                                        className="rounded-lg h-48 w-auto object-cover flex-shrink-0 hover:scale-105 smooth-transition cursor-pointer"
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-4 justify-end mt-6">
                        <a
                            href={project.code}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-2 bg-[var(--color-accent)]/20 rounded hover:bg-[var(--color-accent)]/40 transition-all"
                        >
                            View Code
                        </a>
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-2 bg-[var(--color-accent)] text-black rounded hover:opacity-80 transition-all"
                        >
                            Live Demo
                        </a>
                    </div>

                    {/* Close button */}
                    <Tooltip title={'Close'} arrow>
                        <button
                            onClick={onClose}
                            className="absolute px-1.5 cursor-pointer hover:text-red-500 hover:border-red-500 border border-[var(--color-accent)] rounded-full top-3 right-4 text-[var(--color-accent)]"
                        >
                            ✕
                        </button>
                    </Tooltip>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
