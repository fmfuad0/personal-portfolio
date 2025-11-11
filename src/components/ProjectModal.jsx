import React, {useEffect, useRef} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Tooltip} from "@mui/material";
import {useImageContext} from "../context/ViewImageContext.jsx";

const ProjectModal = ({ project, onClose }) => {
    const {setShowImages, setImages, setIndex}= useImageContext();
    const scrollRef = useRef(null);
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [project])

    const handleClick = (e, images, index)=>{
        e.stopPropagation();
        setIndex(index);
        setImages(images);
        setShowImages(true);
    }
    if (!project) return null;

    return (
        <AnimatePresence >
            <motion.div
                className="h-full w-full flex items-center z-50 backdrop-blur-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                ref={scrollRef}
            >
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[var(--color-bg)]/95 min-w-full  overflow-y-auto px-10 p-6 rounded-xl shadow-xl text-white relative"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                >
                    <h2 className="text-2xl text-[var(--color-accent)] font-semibold mb-4">
                        {project.title}
                    </h2>
                    <div className={`w-full`}>
                        <img
                            src={project.coverImage}
                            alt={project.title}
                            className="rounded-lg mb-4 w-full h-100 object-fit"
                            onClick={(e)=>handleClick(e, [project.coverImage], 0, true)}
                        />
            </div>

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
                                        onClick={(e)=>handleClick(e, project.screenshots, idx, true)}
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
