import React from "react";

const ProjectCard = ({ project, onClick }) => {
    return (
        <div
            onClick={() => onClick(project)}
            className="cursor-pointer relative overflow-hidden rounded-xl shadow-md bg-[var(--color-accent)]/5 hover:shadow-xl smooth-transition group"
        >
            {/* Image container */}

            <div className="overflow-hidden max-h-48 w-full">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-[1s] ease-linear group-hover:-translate-y-[60%]"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="lg:text-xl md:text-lg font-semibold text-[var(--color-accent)] mb-2">
                    {project.title}
                </h3>
                <p className="lg:text-sm md:text-sm sm:text-xs text-white/80 mb-2">
                    {project.description.slice(0, 80)}...
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="bg-[var(--color-accent)]/20 text-[var(--color-accent)] px-2 py-1 text-xs rounded"
                        >
              {t}
            </span>
                    ))}
                </div>
            </div>
            <div className={`w-3 h-3 bg-[var(--color-accent)] absolute top-[91%] right-1 rounded-full m-2`}>
            </div>
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>

        </div>
    );
};

export default ProjectCard;
