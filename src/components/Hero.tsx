"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

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
      style={{ scale, opacity, filter: blur }}
      className="relative min-h-screen flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-24 pt-28 pb-20 text-white overflow-hidden scroll-mt-28"
    >
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ x: textX }}
        className="relative z-20 w-full text-center lg:text-left"
      >
        <h1 className="text-[20vw] lg:text-[18vw] leading-[0.85] font-black">
          arun
        </h1>
        <h1 className="text-[20vw] lg:text-[18vw] leading-[0.85] font-black">
          chandran.
        </h1>

        <p className="mt-6 text-base md:text-lg font-light opacity-80 whitespace-normal">
          CS Undergrad • Software Engineer • Full Stack • IBM Certified DevOps Engineer • Founder @Creviro.io
        </p>

        <a
          href="https://drive.google.com/file/d/1ybX2pcprxox3uwnsBES9t3LNABDd8Z_a/view?usp=sharing"
          target="_blank"
          className="mt-6 inline-flex items-center gap-2 text-sm font-light hover:opacity-60 transition"
        >
          Download Resume ↗
        </a>
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ x: imageX }}
        className="relative xl:absolute xl:right-24 xl:top-1/2 xl:-translate-y-1/2 mt-12 xl:mt-0 flex justify-center w-full xl:w-auto"
      >
        <img
          src="/img1.jpg"
          alt="Arun"
          className="w-[260px] sm:w-[320px] lg:w-[380px] h-[360px] sm:h-[420px] lg:h-[480px] object-cover rounded-[36px]"
        />
      </motion.div>
    </motion.section>
  );
}
