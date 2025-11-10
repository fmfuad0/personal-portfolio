import React, { useState } from "react";
import { projectsData } from "../data/projectsData.js";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";

const categories = ["All", "Frontend", "Backend", "Full-stack"];

const ProjectGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects =
        selectedCategory === "All"
            ? projectsData
            : projectsData.filter((p) => p.category === selectedCategory);

    return (
        <section className="w-full backdrop-blur-sm min-h-screen py-16 px-10 text-white">
            <h2 className="text-3xl font-bold text-center text-[var(--color-accent)] mb-10">
                My Projects
            </h2>

            {/* Tabs */}
            <div className="flex justify-center gap-6 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`px-4 py-2 rounded-full border text-sm font-medium ${
                            selectedCategory === cat
                                ? "bg-[var(--color-accent)] text-black"
                                : "border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
                        } transition-all`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredProjects.map((p) => (
                    <ProjectCard key={p.id} project={p} onClick={setSelectedProject} />
                ))}
            </div>

            {/* Modal */}

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </section>
    );
};

export default ProjectGrid;
