"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll animations
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const imageX = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const blurValue = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const blur = useTransform(blurValue, (value) => `blur(${value}px)`);

  return (
    <motion.section
      ref={ref}
      id="home"
      style={{
        scale,
        opacity,
        filter: blur,
      }}
      className="relative min-h-screen flex items-center px-24 text-white overflow-hidden"
    >
      {/* TEXT BLOCK */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ x: textX }}
        className="relative z-20 w-full"
      >
        <h1 className="text-[18vw] leading-[0.85] font-black tracking-[-0.02em]">
          arun
        </h1>

        <h1 className="text-[18vw] leading-[0.85] font-black tracking-[-0.02em]">
          chandran.
        </h1>

        <p className="mt-8 text-lg font-light opacity-80 whitespace-nowrap">
          CS Undergrad  •  Software Engineer  •  Full Stack  •  IBM Certified DevOps Engineer  •  Founder @Creviro.io
        </p>

        <a
          href="https://drive.google.com/file/d/1ybX2pcprxox3uwnsBES9t3LNABDd8Z_a/view?usp=sharing"
          target="_blank"
          className="mt-6 inline-flex items-center gap-2 text-sm font-light tracking-wide hover:opacity-60 transition"
        >
          Download Resume ↗
        </a>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        style={{ x: imageX }}
        className="absolute right-24 top-1/2 -translate-y-1/2 z-10"
      >
        <img
          src="/img1.jpg"
          alt="Arun"
          className="w-[380px] h-[480px] object-cover rounded-[36px]"
        />
      </motion.div>
    </motion.section>
  );
}
