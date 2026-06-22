/**
 * Hero.jsx
 *
 * Root Hero section component.
 *
 * Z-layer stack (bottom → top):
 *  z-0   HeroVideo      — full-screen MP4 background
 *  z-[1] HeroOverlay    — subtle dark-blue translucent tint
 *  z-[2] Decorative text — gold serif watermark (inside HeroText)
 *  z-[3] Left content    — animated name + role (inside HeroText)
 */

import HeroVideo from './HeroVideo';
import HeroOverlay from './HeroOverlay';
import HeroText from './HeroText';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-screen h-screen overflow-hidden bg-navy-950"
      aria-label="Hero section"
    >
      {/* Layer 1 — Video background */}
      <HeroVideo />

      {/* Layer 2 — Dark-blue overlay */}
      {/* <HeroOverlay /> */}

      {/* Layer 3+4 — Decorative text & foreground content */}
      <HeroText />
    </section>
  );
};

export default Hero;
