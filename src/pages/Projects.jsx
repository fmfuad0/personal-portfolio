import React from 'react';
import ProjectGrid from "../components/ProjectGrid.jsx";

const Projects = () => {
    return (
        <div>
            <div className={`fading-border border-[thin]  `}>
                <h1 className={`text-white tracking-widest px-6 my-3 text-xl font-semibold`}><span className={`text-[var(--color-accent)]`}>P</span>rojects</h1>
                <div className={`flex gap-2`}></div>
            </div>
            <ProjectGrid/>
        </div>
    );
};

export default Projects;