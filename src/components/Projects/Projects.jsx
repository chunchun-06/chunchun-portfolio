import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { PROJECTS_DATA } from "./ProjectData";

const textFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative flex flex-col items-center w-full py-24 overflow-hidden z-20">
      
      {/* Background cinematic glows for the section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          variants={textFade} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="flex flex-col items-center gap-4 text-center mb-16"
        >
          <span className="text-warm font-semibold uppercase tracking-[0.4em] text-[12px] drop-shadow-[0_0_8px_rgba(243,228,201,0.5)]">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-sans mt-2">
            Featured Projects
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-warm/80 to-transparent mt-4 shadow-[0_0_15px_rgba(243,228,201,0.6)]" />
          <p className="text-slate-400 max-w-2xl mt-6 text-lg">
            A selection of my best work, showcasing full-stack development, desktop automation, and machine learning.
          </p>
        </motion.div>

        {/* Projects List (1x1 Layout) */}
        <div className="flex flex-col gap-16 max-w-5xl mx-auto w-full">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onOpen={() => setSelectedProject(project)} 
            />
          ))}
        </div>

      </div>

      {/* Premium Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
