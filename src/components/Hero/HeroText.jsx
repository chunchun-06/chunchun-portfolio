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
 *
 * Both sublayers are defined inline here for colocation; they can be split into
 * separate files if this component grows beyond ~150 lines.
 */

import { motion } from 'framer-motion';
import { HiArrowDownTray } from 'react-icons/hi2';

/* ─────────────────────────────────────────────────────────────
   Subcomponent: Decorative background serif typography
   z-[2] — above overlay, visually behind subject (opacity trick)
───────────────────────────────────────────────────────────── */
const HeroDecorativeText = () => (
  <div
    className="pointer-events-none select-none absolute z-[2] w-full text-center"
    aria-hidden="true"
    style={{
      /* Sit in the upper-center — above where the head/face appears in the video.
         Adjust top % to fine-tune relative to your actual video framing. */
      top: '18%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
    }}
  >
    <p
      style={{
        fontFamily: 'Cinzel, "Cormorant Garamond", Georgia, serif',
        fontSize: 'clamp(40px, 7vw, 20px)',   /* fluid — stays proportional */
        fontWeight: 600,
        color: '#D0A933',
        opacity: 0.42,
        letterSpacing: '0.45em',
        textTransform: 'uppercase',
        lineHeight: 1.45,
        textAlign: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      BUILD DIFFERENT
      <br />
      ENGINEERED BETTER
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
   z-[3] — always in front of decorative layer
───────────────────────────────────────────────────────────── */
/* Smooth scroll helper */
const scrollToProjects = () => {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const HeroLeftContent = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="absolute z-[3] flex flex-col"
    style={{
      left: 'clamp(24px, 5vw, 70px)',   /* responsive — 24px on mobile, 70px on wide */
      top: '58%',
      transform: 'translateY(-60%)',
    }}
  >
    {/* ── Name line ─────────────────────────────────── */}
    <motion.p
      variants={slideInLeft}
      style={{
        color: '#FFFFFF',
        fontSize: 'clamp(18px, 2.4vw, 20px)',
        fontWeight: 700,
        letterSpacing: '0.20em',
        lineHeight: 2.3,
        textTransform: 'uppercase',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      Hi, I&apos;m Chunchun,
    </motion.p>

    {/* ── Role line ─────────────────────────────────── */}
    <motion.p
      variants={slideInLeft}
      style={{
        color: '#FFFFFF',
        fontSize: 'clamp(18px, 2.4vw, 20px)',
        fontWeight: 700,
        letterSpacing: '0.20em',
        lineHeight: 1.3,
        textTransform: 'uppercase',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      A Full-Stack Developer
    </motion.p>

    {/* ── CTA Button Row ────────────────────────────── */}
    <motion.div
      variants={slideInLeft}
      className="flex flex-row items-center gap-4 mt-8"
    >
      {/* Primary: Download CV */}
      <motion.a
        id="hero-cta-download"
        href="/resume/CHUNCHUNKUMAR D.pdf"
        download="Chunchun_Rai_Resume.pdf"
        whileHover={{ scale: 1.06, boxShadow: '0 8px 32px rgba(255,255,255,0.22)' }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-widest cursor-pointer select-none"
        style={{
          background: '#FFFFFF',
          color: '#0a0a0a',
          border: '1.5px solid rgba(255,255,255,0.9)',
          boxShadow: '0 2px 18px rgba(255,255,255,0.10)',
          fontFamily: 'Inter, system-ui, sans-serif',
          letterSpacing: '0.13em',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
        aria-label="Download Chunchun Rai resume PDF"
      >
        <HiArrowDownTray
          style={{ width: '15px', height: '15px', flexShrink: 0, strokeWidth: 2 }}
          aria-hidden="true"
        />
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
        className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-widest cursor-pointer select-none"
        style={{
          background: 'transparent',
          color: '#FFFFFF',
          border: '1.5px solid rgba(255,255,255,0.75)',
          fontFamily: 'Inter, system-ui, sans-serif',
          letterSpacing: '0.13em',
          whiteSpace: 'nowrap',
        }}
        aria-label="Scroll to Projects section"
      >
        View Projects
      </motion.button>
    </motion.div>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────
   Root export: HeroText
   Renders both sublayers inside a shared absolute wrapper.
───────────────────────────────────────────────────────────── */
const HeroText = () => {
  return (
    <div className="absolute inset-0">
      {/* Layer: decorative serif watermark — upper center */}
      <HeroDecorativeText />

      {/* Layer: foreground name + role — left, vertically centered */}
      <HeroLeftContent />
    </div>
  );
};

export default HeroText;
