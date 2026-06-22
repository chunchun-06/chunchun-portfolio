# Media Assets

Place your media files in the following locations:

## Video
- `public/videos/hero.mp4`
  - Recommended: H.264 MP4, 1080p or 4K
  - Compress with HandBrake or FFmpeg for web delivery
  - Target size: < 10 MB for fast load

## Images
- `public/images/hero-poster.jpg`
  - Used as the video poster / fallback image
  - Recommended: 1920 × 1080 JPEG, quality 85
  - This is shown while the video is loading or on devices that block autoplay

## Notes
- Files in `public/` are served at the root: `/videos/hero.mp4`
- Keep file sizes small to avoid layout shift on slow connections
