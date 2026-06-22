/**
 * HeroOverlay.jsx
 *
 * Applies a subtle dark-blue translucent layer over the video (~20–25% opacity).
 * Keeps the video vibrant and cinematic while improving text contrast.
 * No heavy gradients — let the video's natural lighting and the floating
 * decorative text do the visual work.
 */

const HeroOverlay = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
      style={{
        background:
          'linear-gradient(135deg, rgba(2,8,23,0.38) 0%, rgba(5,15,40,0.22) 50%, rgba(2,8,23,0.30) 100%)',
      }}
    />
  );
};

export default HeroOverlay;
