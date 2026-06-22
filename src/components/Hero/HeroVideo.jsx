

const HeroVideo = () => {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src="/videos/chunchun.mp4"
      poster="/images/hero-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"        // decorative — hidden from screen readers
      preload="auto"
    />
  );
};

export default HeroVideo;
