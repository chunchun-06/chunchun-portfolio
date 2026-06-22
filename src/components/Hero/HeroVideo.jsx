

const HeroVideo = () => {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src="/videos/chunchun.mp4"
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"        // decorative — hidden from screen readers
      preload="metadata"
    />
  );
};

export default HeroVideo;
