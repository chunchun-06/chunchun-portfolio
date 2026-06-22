/**
 * HeroText.jsx
 *
 * Hero content layer. Composed of two independent sublayers:
 *
 *  1. HeroDecorativeText — serif "BUILD DIFFERENT / ENGINEERED BETTER"
 *     positioned upper-center, 22% opacity, sits visually behind the portrait.
 *
 *  2. HeroLeftContent — "Hi, I'm Chunchun / A Full-Stack Developer"
 *     left-aligned, vertically centered, animated in from the left with Framer Motion.
 */

import { motion } from 'framer-motion';
import { HiArrowDownTray } from 'react-icons/hi2';

/* ─────────────────────────────────────────────────────────────
   Subcomponent: Decorative background serif typography
───────────────────────────────────────────────────────────── */
const HeroDecorativeText = () => (
  <div
    className="pointer-events-none select-none absolute z-[2] w-full text-center top-[12%] left-1/2 -translate-x-1/2 md:top-[18%] md:w-[90%]"
    aria-hidden="true"
  >
    <p
      className="font-cinzel font-semibold text-[#D0A933] opacity-[0.42] uppercase text-center whitespace-nowrap flex flex-col md:block tracking-[0.2em] text-[28px] leading-snug sm:text-[36px] md:text-[40px] md:tracking-[0.45em] md:leading-[1.45]"
    >
      {/* Mobile: 3 balanced lines */}
      <span className="md:hidden">
        BUILD DIFFERENT<br/>
        ENGINEERED<br/>
        BETTER
      </span>
      {/* Desktop/Tablet: 2 lines */}
      <span className="hidden md:inline">
        BUILD DIFFERENT<br/>
        ENGINEERED BETTER
      </span>
    </p>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   Framer Motion variants for the left-side entrance
───────────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.4,
    },
  },
};

const slideInLeft = {
  hidden:  { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─────────────────────────────────────────────────────────────
   Subcomponent: Left-side foreground name + role text
───────────────────────────────────────────────────────────── */
const scrollToProjects = () => {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const HeroLeftContent = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="absolute z-[3] flex flex-col w-full px-4 items-center text-center left-1/2 -translate-x-1/2 top-[78%] -translate-y-1/2 md:w-auto md:px-0 md:items-start md:text-left md:left-[clamp(24px,5vw,70px)] md:translate-x-0 md:top-[58%] md:-translate-y-[60%]"
  >
    {/* ── Name line ─────────────────────────────────── */}
    <motion.p
      variants={slideInLeft}
      className="text-white font-bold uppercase font-inter text-[15px] sm:text-[18px] leading-[2] tracking-[0.15em] md:text-[clamp(18px,2.4vw,20px)] md:tracking-[0.20em] md:leading-[2.3]"
    >
      Hi, I&apos;m Chunchun,
    </motion.p>

    {/* ── Role line ─────────────────────────────────── */}
    <motion.p
      variants={slideInLeft}
      className="text-white font-bold uppercase font-inter text-[15px] sm:text-[18px] leading-[1.3] tracking-[0.15em] md:text-[clamp(18px,2.4vw,20px)] md:tracking-[0.20em] md:leading-[1.3]"
    >
      A Full-Stack Developer
    </motion.p>

    {/* ── CTA Button Row ────────────────────────────── */}
    <motion.div
      variants={slideInLeft}
      className="flex flex-row items-center justify-center gap-3 mt-6 flex-nowrap md:justify-start md:gap-4 md:mt-8"
    >
      {/* Primary: Download CV */}
      <motion.a
        id="hero-cta-download"
        href="/resume/CHUNCHUNKUMAR D.pdf"
        download="Chunchun_Rai_Resume.pdf"
        whileHover={{ scale: 1.06, boxShadow: '0 8px 32px rgba(255,255,255,0.22)' }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        className="inline-flex items-center rounded-full font-bold uppercase cursor-pointer select-none border-[1.5px] whitespace-nowrap bg-white text-[#0a0a0a] border-white/90 shadow-[0_2px_18px_rgba(255,255,255,0.1)] gap-1.5 px-4 py-2.5 text-[10px] tracking-wider md:gap-2 md:px-6 md:py-2.5 md:text-xs md:tracking-[0.13em] md:font-inter"
        aria-label="Download Chunchun Rai resume PDF"
      >
        <HiArrowDownTray className="shrink-0 stroke-2 w-[14px] h-[14px] md:w-[15px] md:h-[15px]" aria-hidden="true" />
        Download CV
      </motion.a>

      {/* Secondary: View Projects */}
      <motion.button
        id="hero-cta-projects"
        onClick={scrollToProjects}
        whileHover={{
          scale: 1.06,
          backgroundColor: 'rgba(255,255,255,1)',
          color: '#0a0a0a',
          boxShadow: '0 8px 32px rgba(255,255,255,0.18)',
        }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        className="inline-flex items-center rounded-full font-bold uppercase cursor-pointer select-none border-[1.5px] whitespace-nowrap bg-transparent text-white border-white/75 px-4 py-2.5 text-[10px] gap-1.5 tracking-wider md:gap-2 md:px-6 md:py-2.5 md:text-xs md:tracking-[0.13em] md:font-inter"
        aria-label="Scroll to Projects section"
      >
        View Projects
      </motion.button>
    </motion.div>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────
   Root export: HeroText
───────────────────────────────────────────────────────────── */
const HeroText = () => {
  return (
    <div className="absolute inset-0">
      {/* Layer: decorative serif watermark */}
      <HeroDecorativeText />

      {/* Layer: foreground name + role */}
      <HeroLeftContent />
    </div>
  );
};

export default HeroText;
