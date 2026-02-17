"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* Horizontal split movement (same style as Hero) */
  const textX = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const videoX = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  /* Scale effect */
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);

  /* Fade */
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  /* Blur effect */
  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [10, 0, 0, 10]
  );

  const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <motion.section
      ref={ref}
      id="about"
      style={{
        scale,
        opacity,
        filter: blur,
      }}
      className="min-h-screen flex items-center px-24 text-white relative overflow-hidden"
    >
      <div className="w-full">

        {/* HEADER */}
        <motion.h2
          className="text-6xl font-bold mb-20 tracking-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          about.
        </motion.h2>

        <div className="grid grid-cols-2 gap-24 items-center">

          {/* VIDEO LEFT */}
          <motion.div style={{ x: videoX }}>
            <video
              src="/pixel-arun-vid.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-[420px] h-[420px] object-cover rounded-[40px]"
            />
          </motion.div>

          {/* TEXT RIGHT */}
          <motion.div style={{ x: textX }}>
            <p className="text-[19px] font-light leading-relaxed text-justify tracking-wide text-white/85">
              Hello there!, I’m Arun Kumar (aka arun chandran) – a Computer Science graduate passionate about building thoughtful, scalable digital experiences. I enjoy working at the intersection of software engineering, full-stack development, and DevOps, where ideas evolve into reliable, production-ready systems. Over the past few years, I’ve built AI-driven frameworks, real-time activity recognition systems, and modern web applications using Java, Python, C/C++, JavaScript, React, Flask, MongoDB, and SQL. I’ve explored backend architecture, system design, UI engineering, cloud deployment, and CI/CD pipelines-always focusing on clean, efficient, and maintainable code. As an IBM Certified DevOps Engineer and founder of Creviro.io, I value strong fundamentals, structured problem-solving, and continuous learning while contributing to impactful, real-world products.There’s more to my journey - feel free to scroll and explore.
            </p>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
