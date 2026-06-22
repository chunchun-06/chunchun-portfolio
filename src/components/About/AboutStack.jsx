import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { 
  FaReact, FaNodeJs, FaJava, FaDocker, FaHtml5, FaCss3Alt, FaGitAlt, FaPython
} from "react-icons/fa";
import { 
  SiExpress, SiMongodb, SiJavascript, SiRedis, SiTailwindcss, SiVite 
} from "react-icons/si";

// --- Mathematical Configuration ---

const TECH_DATA = [
  // Ring 1 (Inner - 6 Technologies)
  { id: 'react', name: 'React', icon: FaReact, ring: 1 },
  { id: 'node', name: 'Node.js', icon: FaNodeJs, ring: 1 },
  { id: 'express', name: 'Express', icon: SiExpress, ring: 1 },
  { id: 'mongodb', name: 'MongoDB', icon: SiMongodb, ring: 1 },
  { id: 'javascript', name: 'JavaScript', icon: SiJavascript, ring: 1 },
  { id: 'python', name: 'Python', icon: FaPython, ring: 1 },
  
  // Ring 2 (Outer - 8 Technologies)
  { id: 'java', name: 'Java', icon: FaJava, ring: 2 },
  { id: 'docker', name: 'Docker', icon: FaDocker, ring: 2 },
  { id: 'redis', name: 'Redis', icon: SiRedis, ring: 2 },
  { id: 'git', name: 'Git', icon: FaGitAlt, ring: 2 },
  { id: 'html', name: 'HTML5', icon: FaHtml5, ring: 2 },
  { id: 'css', name: 'CSS3', icon: FaCss3Alt, ring: 2 },
  { id: 'tailwind', name: 'Tailwind CSS', icon: SiTailwindcss, ring: 2 },
  { id: 'vite', name: 'Vite', icon: SiVite, ring: 2 },
];

const textFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const BackgroundVignette = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.02)_0%,transparent_50%)]" />
    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(2,8,23,1)]" />
  </div>
);

const AboutStack = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [hoveredTech, setHoveredTech] = useState(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive radii
  const getRadii = () => {
    if (windowWidth < 768) return { 1: null, 2: null }; // Mobile: grid only
    if (windowWidth < 1024) return { 1: 90, 2: 155 }; // Tablet
    return { 1: 100, 2: 185 }; // Desktop
  };

  const radii = getRadii();
  const isMobile = windowWidth < 768;

  // Process coordinates
  const processedTech = useMemo(() => {
    const counts = { 1: 6, 2: 8 };
    const indices = { 1: 0, 2: 0 };
    
    return TECH_DATA.map((tech) => {
      if (isMobile) {
        return { ...tech, isGrid: true };
      }
      
      const r = radii[tech.ring];
      const count = counts[tech.ring];
      const index = indices[tech.ring]++;
      
      const angle = (360 / count) * index;
      const x = r * Math.cos((angle * Math.PI) / 180);
      const y = r * Math.sin((angle * Math.PI) / 180);
      
      return {
        ...tech,
        x,
        y,
        isGrid: false,
      };
    });
  }, [radii, isMobile]);

  const ringConfigs = [
    { id: 1, duration: 60, direction: "normal" },   // Clockwise
    { id: 2, duration: 90, direction: "reverse" },  // Counter-clockwise
  ];

  const activeRing = hoveredTech?.ring;

  return (
    <section id="tech-stack" className="relative flex flex-col items-center w-full mt-20 pt-10 overflow-hidden">
      {/* Inline CSS for performant continuous pausing orbits */}
      <style>{`
        @keyframes solarOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .solar-ring {
          animation: solarOrbit var(--duration) linear infinite;
          animation-direction: var(--direction);
        }
        .solar-icon {
          animation: solarOrbit var(--duration) linear infinite;
          animation-direction: var(--counter-direction);
        }
        .is-paused .solar-ring,
        .is-paused .solar-icon {
          animation-play-state: paused !important;
        }
      `}</style>

      <BackgroundVignette />

      <motion.div variants={textFade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col items-center gap-4 text-center z-10">
        <span className="text-[#8A93A8] font-semibold uppercase tracking-[0.4em] text-[12px]">
          TECH STACK
        </span>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans mt-2">
          Technologies I use to build scalable, modern applications.
        </h3>
        <div className="h-px w-24 bg-gradient-to-r from-blue-500 to-transparent mt-4 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
      </motion.div>

      <div className="h-[70px]" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={`relative flex items-center justify-center w-full min-h-[500px] z-10 ${hoveredTech ? 'is-paused' : ''}`}
      >
        
        {!isMobile && ringConfigs.map((config) => {
          const r = radii[config.id];
          const isHovered = activeRing === config.id;
          const ringTechs = processedTech.filter(t => t.ring === config.id && !t.isGrid);
          
          return (
            <div 
              key={`orbit-system-${config.id}`}
              className="absolute flex items-center justify-center solar-ring pointer-events-none"
              style={{
                width: r * 2,
                height: r * 2,
                "--duration": `${config.duration}s`,
                "--direction": config.direction,
              }}
            >
              {/* Decorative Ring Line */}
              <div 
                className="absolute inset-0 rounded-full border"
                style={{
                  borderColor: isHovered ? 'rgba(59,130,246,0.4)' : 'rgba(59,130,246,0.15)',
                  boxShadow: isHovered ? '0 0 20px rgba(59,130,246,0.15) inset, 0 0 20px rgba(59,130,246,0.15)' : 'none',
                  transition: 'all 0.5s ease',
                }}
              />

              {/* Hover Connection Line (static inside rotating wrapper) */}
              <AnimatePresence>
                {hoveredTech && hoveredTech.ring === config.id && (
                  <motion.svg
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute overflow-visible w-full h-full left-0 top-0 pointer-events-none z-0"
                  >
                    <motion.line
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${hoveredTech.x}px)`}
                      y2={`calc(50% + ${hoveredTech.y}px)`}
                      stroke="rgba(59,130,246,0.5)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.svg>
                )}
              </AnimatePresence>

              {/* Orbiting Icons */}
              {ringTechs.map((tech) => {
                const isThisHovered = hoveredTech?.id === tech.id;
                const isOtherHovered = hoveredTech && !isThisHovered;

                return (
                  <div
                    key={tech.id}
                    className="absolute pointer-events-auto"
                    style={{ 
                      left: '50%', top: '50%', 
                      transform: `translate(-50%, -50%) translate(${tech.x}px, ${tech.y}px)`,
                    }}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    {/* Counter-rotating container keeps icon upright */}
                    <div 
                      className="solar-icon flex items-center justify-center transition-all duration-300"
                      style={{
                        "--duration": `${config.duration}s`,
                        "--counter-direction": config.direction === "normal" ? "reverse" : "normal",
                        transform: isThisHovered ? 'scale(1.12)' : 'scale(1)',
                        opacity: isOtherHovered ? 0.4 : 1,
                      }}
                    >
                      <div className={`group relative flex items-center justify-center w-[58px] h-[58px] rounded-full bg-[#0a1628]/80 backdrop-blur-md border border-white/10 transition-all duration-300 ${isThisHovered ? 'border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'shadow-lg'}`}>
                        <tech.icon className={`w-[34px] h-[34px] transition-all duration-300 ${isThisHovered ? 'text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.9)]' : 'text-slate-300'}`} />
                        
                        <span className={`absolute -top-12 scale-0 opacity-0 transition-all duration-200 bg-navy-950/95 border border-blue-500/30 text-white text-xs font-semibold px-3 py-1.5 rounded shadow-[0_0_15px_rgba(59,130,246,0.2)] whitespace-nowrap pointer-events-none z-50 ${isThisHovered ? 'scale-100 opacity-100' : ''}`}>
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Center Node (Core) */}
        <div 
          className={`absolute z-20 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#020817]/90 backdrop-blur-xl border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.15),inset_0_0_8px_rgba(251,146,60,0.15)] transition-all duration-500 ${hoveredTech ? 'shadow-[0_0_30px_rgba(59,130,246,0.3),inset_0_0_10px_rgba(251,146,60,0.2)]' : ''}`}
        >
          {/* Subtle breathing animation applied to an overlay */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-blue-400/[0.04] to-transparent"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <span 
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-100 to-slate-300 relative z-10 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"
            style={{ fontFamily: 'Cinzel, Georgia, serif' }}
          >
            C
          </span>
        </div>

      </motion.div>

      {/* Mobile Grid Fallback */}
      {isMobile && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-8 px-4 w-full z-10"
        >
          {processedTech.filter(t => t.isGrid).map((tech) => (
            <div
              key={tech.id}
              className="group relative flex items-center justify-center w-[58px] h-[58px] rounded-full bg-[#0a1628]/80 backdrop-blur-md border border-white/10 hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-[1.12]"
            >
              <tech.icon className="w-[34px] h-[34px] text-slate-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300" />
              <span className="absolute -top-12 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-navy-950/95 border border-blue-500/30 text-white text-xs font-semibold px-3 py-1.5 rounded shadow-[0_0_15px_rgba(59,130,246,0.2)] whitespace-nowrap pointer-events-none z-50">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      )}

    </section>
  );
};

export default AboutStack;
