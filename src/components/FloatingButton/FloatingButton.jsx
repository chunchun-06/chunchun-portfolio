/**
 * FloatingButton.jsx
 *
 * A fixed circular "C" button anchored at the bottom-right corner.
 *
 * Behavior:
 *  - If user is at the Hero section (scrollY < 50% of viewport):
 *      → Restart the hero video from the beginning.
 *  - Otherwise:
 *      → Smooth-scroll back to the Hero section.
 *
 * Style: glassmorphism, soft blue-orange glow, Cinzel "C" monogram.
 */

import { motion } from 'framer-motion';
import { useCallback } from 'react';

/* ─── Inline styles (cannot be expressed cleanly in Tailwind) ─ */
const buttonBase = {
  width: '82px',
  height: '82px',
  borderRadius: '50%',
  background: 'rgba(18, 18, 18, 0.55)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  backdropFilter: 'blur(14px)',
  WebkitBackdropFilter: 'blur(14px)',
  boxShadow:
    '0 0 18px rgba(59, 130, 246, 0.28), 0 0 38px rgba(251, 146, 60, 0.14), 0 4px 20px rgba(0, 0, 0, 0.45)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
      position: "fixed",
right: "max(24px, 3vw)",
bottom: "max(24px, 3vh)",
};

const buttonHover = {
  boxShadow:
    '0 0 30px rgba(59, 130, 246, 0.55), 0 0 55px rgba(251, 146, 60, 0.28), 0 6px 28px rgba(0, 0, 0, 0.5)',
};

/* ─── Component ──────────────────────────────────────────── */
const FloatingButton = () => {
  const handleClick = useCallback(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const halfViewport = window.innerHeight * 0.5;
    const alreadyAtHero = window.scrollY < halfViewport;

    if (alreadyAtHero) {
      /* Restart the hero video */
      const video = heroSection.querySelector('video');
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {
          /* Autoplay may be blocked; silently fail */
        });
      }
    } else {
      /* Smooth scroll to hero */
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <motion.button
      id="floating-home-btn"
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ scale: 1.1, ...buttonHover }}
      whileTap={{ scale: 0.93 }}
      className="z-50"
      style={buttonBase}
      aria-label="Return to top / Restart hero"
      title="Back to top"
    >
      {/* Monogram "C" — Cinzel serif for elegance */}
      <span
        style={{
          fontFamily: 'Cinzel, Georgia, serif',
          fontSize: '22px',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '0.02em',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        CC
      </span>
    </motion.button>
  );
};

export default FloatingButton;
