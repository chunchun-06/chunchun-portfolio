/**
 * About.jsx
 * 
 * Root component for the About section.
 * Maintains the cinematic deep navy gradient from the Hero, 
 * using a seamless transition. Features an editorial asymmetrical layout.
 */
import { motion } from 'framer-motion';
import AboutCards from './AboutCards';
import AboutStack from './AboutStack';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-navy-950 text-white overflow-hidden"
    >
      {/* 
        Background Continuity: 
        Uses a smooth top-to-bottom gradient so the hero transitions naturally 
        into the about section without a hard edge.
      */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'linear-gradient(180deg, rgba(2,8,23,0) 0%, rgba(5,15,40,0.6) 20%, rgba(2,8,23,1) 100%)',
        }}
        aria-hidden="true" 
      />

      {/* Subtle ambient lighting to match the cinematic hero */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-24 md:py-32 flex flex-col gap-24">
        
        {/* Section 1: Intro */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6 max-w-3xl"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <span className="text-warm font-semibold uppercase tracking-[0.4em] text-[12px] drop-shadow-[0_0_8px_rgba(243,228,201,0.5)]">
              ABOUT ME
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white font-sans">
              Who Am I?
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-warm to-transparent mt-4 shadow-[0_0_15px_rgba(243,228,201,0.6)]" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-slate-300"
          >
            I am a Computer Science & Engineering student at Kongu Engineering College, and a passionate <span className="text-white font-medium">Full Stack Developer</span> and <span className="text-white font-medium">AI/ML Enthusiast</span>. I am dedicated to building scalable software and solving real-world problems through robust, premium digital experiences.
          </motion.p>

          {/* Languages Subsection */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3 mt-4">
            
            <style>{`
              .lang-btn {
                position: relative;
                border-radius: 9999px;
                overflow: hidden;
                padding: 2px;
                isolation: isolate;
                cursor: default;
              }
              .lang-btn::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 400%;
                height: 100%;
                background: linear-gradient(115deg, #4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b);
                background-size: 25% 100%;
                animation: langBtnAnim 0.75s linear infinite;
                animation-play-state: paused;
                translate: -5% 0%;
                transition: translate 0.25s ease-out;
                z-index: -1;
              }
              .lang-btn:hover::before {
                animation-play-state: running;
                transition-duration: 0.75s;
                translate: 0% 0%;
              }
              @keyframes langBtnAnim {
                to { transform: translateX(-25%); }
              }
              .lang-btn-inner {
                display: flex;
                align-items: center;
                gap: 0.625rem;
                padding: 0.5rem 1.25rem;
                background: #0a1628;
                border-radius: 9999px;
                height: 100%;
                width: 100%;
              }
            `}</style>

            <span className="text-warm font-semibold uppercase tracking-[0.2em] text-[11px] drop-shadow-[0_0_8px_rgba(243,228,201,0.5)]">
              LANGUAGES
            </span>
            <div className="flex flex-wrap items-center gap-4">
              
              <div className="lang-btn group transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(251,146,60,0.3)]">
                <div className="lang-btn-inner text-white text-sm font-medium">
                  Hindi
                </div>
              </div>
              
              <div className="lang-btn group transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <div className="lang-btn-inner text-white text-sm font-medium">
                  English
                </div>
              </div>

              <div className="lang-btn group transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <div className="lang-btn-inner text-white text-sm font-medium">
                  Tamil
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>

        {/* Section 2: Feature Cards */}
        <AboutCards />

        {/* Section 3: Orbiting Tech Stack */}
        <AboutStack />

      </div>
    </section>
  );
};

export default About;
