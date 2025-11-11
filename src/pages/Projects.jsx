import React, {useState, useEffect, useRef  } from 'react';
import ProjectGrid from "../components/ProjectGrid.jsx";
import ProjectModal from "../components/ProjectModal.jsx";
import projectModal from "../components/ProjectModal.jsx";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const scrollRef = useRef();
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) setScrollPos(scrollRef.current.scrollTop);
        };
        const div = scrollRef.current;
        if (div) div.addEventListener("scroll", handleScroll);
        return () => {
            if (div) div.removeEventListener("scroll", handleScroll);
        };
    }, [selectedProject]);

    // Restore scroll position on re-render
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: scrollPos, behavior: "smooth" });
        }
    }, [scrollPos]);

    return (
        <div className={` bg-[var(--color-bg)]/30 backdrop-blur-xs`} ref={scrollRef}>
            <div className={`fading-border border-[thin] `}>
                <h1 className={`text-white tracking-widest px-6 py-5 text-xl font-semibold`}><span className={`text-[var(--color-accent)]`}>P</span>rojects</h1>
                {/*<div className={`flex gap-2`}></div>*/}
            </div>
                <ProjectGrid setSelectedProject={setSelectedProject}/>
            {selectedProject && <div className={`bg-black/60 min-w-full h-full absolute top-0 left-0`}>
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            </div>}
        </div>
    );
};

export default Projects;