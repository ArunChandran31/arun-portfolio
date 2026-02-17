"use client";

export default function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed inset-0 w-full h-full object-cover -z-10"
    >
      <source src="/background.mp4" type="video/mp4" />
    </video>
  );
}
