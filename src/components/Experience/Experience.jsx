import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

const EXPERIENCES = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Twincord Technology",
    duration: "June 2026 – Present",
    description: "Contributing to backend development for scalable web applications. Designing RESTful APIs using Next.js, working with PostgreSQL databases, integrating backend services with frontend applications, and collaborating in a professional development team using Git.",
    techStack: ["Express.js", "PostgreSQL", "JavaScript", "REST APIs", "Git"]
  },
  {
    id: 2,
    role: "In-Plant Trainee – Frontend Development",
    company: "San Technovation",
    duration: "14 Days",
    description: "Completed a 14-day industry training program focused on modern frontend web development. Learned responsive web design, HTML, CSS, JavaScript fundamentals, UI development, and practical frontend workflows through hands-on sessions.",
    techStack: ["JavaScript","React", "Responsive Design"]
  }
];

const Experience = () => {
  return (
    <section className="relative w-full py-24 bg-[#06152D] flex flex-col items-center overflow-hidden z-20">
      
      {/* Background Glows */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-[#F3E4C9]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-[#F3E4C9] font-semibold uppercase tracking-widest text-[12px] mb-4 drop-shadow-[0_0_5px_rgba(243,228,201,0.3)] block">
            JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Professional Experience
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-[28px] top-4 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/10 to-transparent" />

          <div className="flex flex-col gap-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="relative pl-16 md:pl-24"
              >
                {/* Timeline Indicator */}
                <div className="absolute left-[11px] md:left-[19px] top-6 w-[19px] h-[19px] rounded-full bg-[#06152D] border-4 border-[#F3E4C9] shadow-[0_0_15px_rgba(243,228,201,0.5)] z-10" />

                {/* Experience Card */}
                <div className="flex flex-col w-full bg-[#0b1f3a]/75 backdrop-blur-[18px] border border-[#f3e4c9]/12 rounded-[24px] p-6 md:p-8 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] transition-all duration-400 group">
                  
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-blue-100 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-[#F3E4C9] font-medium text-sm md:text-base">
                        <FiBriefcase className="shrink-0" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#94A3B8] text-xs font-semibold uppercase tracking-wider shrink-0 h-fit">
                      {exp.duration}
                    </span>
                  </div>

                  <div className="h-px w-full bg-white/5 mb-5" />

                  {/* Description */}
                  <p className="text-[#CBD5E1] text-[15px] leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs font-medium text-blue-200 bg-blue-500/10 border border-blue-500/20 rounded-md transition-all duration-300 group-hover:border-blue-500/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
