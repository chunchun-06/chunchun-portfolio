import { motion } from "framer-motion";
import { useEffect } from "react";
import { FiX, FiCheckCircle } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-[#020817]/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#071226] border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-red-500/80 hover:text-white transition-colors duration-300"
          aria-label="Close modal"
        >
          <FiX size={20} />
        </button>

        <div className="overflow-y-auto w-full h-full custom-scrollbar">
          
          {/* 1. Large Project Banner */}
          {project.image && (
            <div className="w-full h-[250px] sm:h-[350px] relative shrink-0">
              <div className="absolute inset-0 bg-gradient-to-t from-[#071226] to-transparent opacity-90 z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Modal Content Padding */}
          <div className={`p-6 sm:p-10 ${!project.image ? 'pt-12' : 'pt-0 relative z-20 -mt-16'}`}>
            
            <span className="text-warm font-semibold uppercase tracking-wider text-xs mb-3 drop-shadow-[0_0_5px_rgba(243,228,201,0.5)] block">
              {project.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
              {project.title}
            </h2>

            {/* 2. Project Overview */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-500">#</span> Overview
              </h3>
              <p className="text-slate-300 leading-relaxed text-[15px] sm:text-base">
                {project.description}
              </p>
            </div>

            {/* 3. Problem Statement (If provided) */}
            {project.problemStatement && (
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-blue-500">#</span> Problem Statement
                </h3>
                <p className="text-slate-300 leading-relaxed text-[15px] sm:text-base">
                  {project.problemStatement}
                </p>
              </div>
            )}

            {/* 4. My Solution (If provided) */}
            {project.solution && (
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-blue-500">#</span> The Solution
                </h3>
                <p className="text-slate-300 leading-relaxed text-[15px] sm:text-base">
                  {project.solution}
                </p>
              </div>
            )}

            {/* 5. Features Grid */}
            {project.features && project.features.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-blue-500">#</span> Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-300 text-[15px]">
                      <FiCheckCircle className="text-blue-500 shrink-0 mt-1" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Technology Stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-blue-500">#</span> Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 text-sm font-medium text-blue-200 bg-blue-500/10 border border-blue-500/20 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 7. Challenges Faced (If provided) */}
            {project.challenges && (
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-orange-500">#</span> Challenges Faced
                </h3>
                <p className="text-slate-300 leading-relaxed text-[15px] sm:text-base">
                  {project.challenges}
                </p>
              </div>
            )}

            {/* 8. What I learned (If provided) */}
            {project.learnings && (
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-green-500">#</span> What I Learned
                </h3>
                <p className="text-slate-300 leading-relaxed text-[15px] sm:text-base">
                  {project.learnings}
                </p>
              </div>
            )}

            {/* 9. Action Buttons */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap gap-4">
              {project.githubLink && (
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                >
                  <FaGithub className="text-xl" />
                  View Source Code
                </a>
              )}
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
