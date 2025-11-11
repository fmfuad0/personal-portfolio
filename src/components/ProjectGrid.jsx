import React, { useState } from "react";
import { projectsData } from "../data/projectsData.js";
import ProjectCard from "./ProjectCard.jsx";

const categories = ["All", "Frontend", "Backend", "Full-stack"];

const ProjectGrid = ({setSelectedProject}) => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects =
        selectedCategory === "All"
            ? projectsData
            : projectsData.filter((project) => project.category.includes(selectedCategory));

    return (
        <section className=" h-full py-5 px-10 text-white">
            <h2 className="lg:text-3xl font-bold text-center text-[var(--color-accent)] mb-5">
                My Projects
            </h2>

            {/* Tabs */}
            <div className="flex justify-center gap-6 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`lg:px-4 lg:py-2 md:p-1 sm:p-0.5 p-0 rounded-full cursor-pointer border  lg:text-sm md:text-xs font-medium ${
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
            <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredProjects.map((p) => (
                    <ProjectCard key={p.id} project={p} onClick={setSelectedProject} />
                ))}
            </div>
        </section>
    );
};

export default ProjectGrid;
