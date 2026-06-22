import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

// Helper to get initials for the gradient placeholder
const getInitials = (title) => {
  const words = title.split(/[ -]/);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return title.substring(0, 2).toUpperCase();
};

const ProjectCard = ({ project, index, onOpen }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index % 2 === 0 ? 0 : 0.1, ease: "easeOut" }}
      className="flex flex-col w-full bg-[#071226]/80 backdrop-blur-xl border border-white/10 rounded-[28px] overflow-hidden hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_15px_50px_rgba(59,130,246,0.15)] transition-all duration-500 group p-6 lg:p-10"
    >
      {/* Header Area (Top) */}
      <div className="mb-6 lg:mb-8">
        <span className="text-[#F3E4C9] font-semibold uppercase tracking-widest text-[11px] mb-2 drop-shadow-[0_0_5px_rgba(243,228,201,0.2)] block">
          {project.category}
        </span>
        <h4 className="text-2xl lg:text-3xl font-bold text-white leading-tight group-hover:text-blue-100 transition-colors">
          {project.title}
        </h4>
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-12">
        {/* Left Area (45%) - Screenshot or Gradient */}
        <div className="relative w-full lg:w-[45%] h-[250px] lg:h-[300px] shrink-0 overflow-hidden bg-[#020817]/50 border border-white/[0.03] rounded-2xl flex items-center justify-center p-4">
          {project.image ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent group-hover:animate-shine z-10 pointer-events-none" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </>
          ) : (
            <div className="w-full h-full rounded-xl flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-[#1e3a8a] shadow-inner">
              <span className="text-5xl font-bold text-white/20 tracking-widest font-serif">
                {getInitials(project.title)}
              </span>
            </div>
          )}
        </div>

        {/* Right Area (55%) - Content */}
        <div className="flex flex-col justify-center flex-grow lg:w-[55%]">
          
          <div className="h-px w-full bg-white/5 mb-6 hidden lg:block" />
          
          {/* Short Description */}
          <p className="text-[#CBD5E1] text-[15px] leading-relaxed mb-6">
            {project.shortDescription || project.description}
          </p>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="flex flex-col gap-2.5 mb-8">
              {project.features.slice(0, 4).map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-[#94A3B8] text-[14px]">
                  <FiCheckCircle className="text-[#F3E4C9] shrink-0" size={16} />
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-8 mt-auto">
            {project.techStack.map((tech, i) => (
              <span 
                key={i} 
                className="px-3 py-1 text-xs font-medium text-blue-200 bg-blue-500/10 border border-blue-500/20 rounded-md transition-all duration-300 group-hover:border-blue-500/40"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/5">
            {project.githubLink && (
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-slate-500 text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                <FaGithub className="text-lg" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            )}
            
            <button 
              onClick={onOpen}
              className="flex items-center justify-center px-8 py-2.5 rounded-full bg-[#F3E4C9] text-[#071226] font-semibold text-sm transition-all duration-300 hover:bg-[#E5D5BA] hover:shadow-[0_0_20px_rgba(243,228,201,0.4)]"
            >
              View Details
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
