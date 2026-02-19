"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"],
  });

  const textX = useTransform(scrollYProgress,[0,0.15,0.85,1],["20%","0%","0%","40%"]);
  const videoX = useTransform(scrollYProgress,[0,0.15,0.85,1],["-20%","0%","0%","-40%"]);
  const scale = useTransform(scrollYProgress,[0,0.5,1],[0.92,1,0.92]);
  const opacity = useTransform(scrollYProgress,[0,0.15,0.85,1],[0,1,1,0]);
  const blurValue = useTransform(scrollYProgress,[0,0.15,0.85,1],[12,0,0,14]);
  const blur = useTransform(blurValue,(v)=>`blur(${v}px)`);

  return (
    <motion.section
      ref={ref}
      id="about"
      style={{ scale, opacity, filter: blur }}
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 text-white relative overflow-hidden pt-28 pb-24 scroll-mt-28"
    >
      <div className="w-full">
        <motion.h2 className="text-5xl md:text-6xl font-bold mb-20">about.</motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 lg:gap-20 items-center">
          <motion.div style={{ x: videoX }} className="flex justify-center">
            <video
              src="/pixel-arun-vid.mp4"
              autoPlay loop muted playsInline
              className="w-full max-w-[420px] h-[320px] md:h-[380px] lg:h-[420px] object-cover rounded-[40px]"
            />
          </motion.div>

          <motion.div style={{ x: textX }}>
            <p className="text-[18px] md:text-[19px] font-light leading-relaxed text-justify text-white/85">
              Hello there! I’m Arun Kumar (aka arun chandran), a Computer Science graduate passionate about building scalable digital experiences across software engineering, full-stack development, and DevOps. I’ve worked on projects ranging from AI-driven systems to modern web applications using React, Python, and MongoDB, while exploring backend architecture, cloud deployment, and CI/CD practices. As an IBM Certified DevOps Engineer and founder of Creviro.io, I enjoy turning ideas into clean, efficient, and maintainable products. I’m currently seeking opportunities to grow as a software engineer by contributing to meaningful solutions and learning from experienced teams. There’s more to my journey — feel free to scroll and explore.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
