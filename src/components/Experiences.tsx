"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  /* ---------------- SCROLL CONTROL ---------------- */

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // full section tracking
  });

  /* ---------- EXIT TRANSITION (ONLY LAST 20%) ---------- */

  const exitProgress = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  const sectionOpacity = useTransform(exitProgress, [0, 1], [1, 0]);
  const blurValue = useTransform(exitProgress, [0, 1], [0, 8]);
  const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

  const leftShift = useTransform(exitProgress, [0, 1], ["0%", "-25%"]);
  const rightShift = useTransform(exitProgress, [0, 1], ["0%", "25%"]);

  /* ---------- TIMELINE INDICATOR ---------- */

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
  });

  const velocity = useVelocity(smoothProgress);

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const stretch = useTransform(
    velocity,
    [-0.6, 0, 0.6],
    [1.6, 1, 1.6]
  );

  const glowSize = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [10, 40, 10]
  );

  /* ---------------- EXPERIENCE DATA ---------------- */

  const experiences = [
    {
      title: "Full Stack Developer — Creviro.io (Self-initiated Startup)",
      duration: "Jun 2025 – Present",
      points: [
        "Built and deployed modern, SEO-optimized web applications using React, Node.js, and MongoDB.",
        "Designed scalable cloud-native architectures with reusable UI/UX systems.",
        "Implemented CI/CD pipelines improving deployment speed by 40%.",
      ],
    },
    {
      title: "Web Development Intern — Unified Mentor Pvt. Ltd.",
      duration: "Jul 2024 – Sept 2024",
      points: [
        "Developed responsive UI interfaces using ReactJS and TailwindCSS.",
        "Built chatbot modules and optimized DOM rendering by 30%.",
        "Engineered modular component libraries for scalable development.",
      ],
    },
    {
      title: "Intel Unnati Industrial Training — Intel",
      duration: "May 2024 – Jul 2024",
      points: [
        "Developed Tele-ICU monitoring pipeline using OpenCV, R-CNN, IoT sensors, and Flask APIs.",
        "Achieved 95% detection accuracy and reduced monitoring time by 40%.",
        "Integrated Twilio emergency alerts with SQLite storage.",
      ],
    },
    {
      title: "IBM Applied DevOps Engineering — IBM",
      duration: "Apr 2024 – Jun 2024",
      points: [
        "Completed hands-on DevOps certification project using Docker, Kubernetes, OpenShift, Serverless, and GitHub Actions.",
        "Implemented CI/CD automation improving release stability by 35%.",
        "Built and validated Python APIs within automated workflows.",
      ],
    },
    {
      title:
        "Machine Learning with Python for Business & Data Analytics — YBI Foundations",
      duration: "Mar 2023 – Apr 2023",
      points: [
        "Developed ML-driven financial analysis platform with automated ETL and EDA.",
        "Trained Random Forest model (R² > 0.90) reducing prediction error by 40%+.",
        "Built BI-style analytics UI improving analysis efficiency by 60%.",
      ],
    },
  ];

  /* ---------------- COMPONENT ---------------- */

  return (
    <motion.section
      ref={ref}
      id="experience"
      style={{
        opacity: sectionOpacity,
        filter: blur,
      }}
      className="relative min-h-screen px-24 py-32 text-white"
    >
      <h2 className="text-6xl font-bold mb-24 tracking-tight">
        experiences.
      </h2>

      <div className="relative">

        {/* Base Line */}
        <div className="absolute left-8 top-0 w-[2px] h-full bg-white/10" />

        {/* Animated Line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-8 top-0 w-[2px] bg-white/40"
        />

        {/* Glow Aura */}
        <motion.div
          style={{
            top: lineHeight,
            width: glowSize,
            height: glowSize,
          }}
          className="absolute left-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-2xl pointer-events-none"
        />

        {/* Liquid Dot */}
        <motion.div
          style={{
            top: lineHeight,
            scaleY: stretch,
          }}
          className="absolute left-8 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        />

        {/* EXPERIENCE ITEMS */}
        <div className="space-y-32 mt-10">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-[120px_1fr_2fr] gap-12 items-start"
            >
              {/* Spacer for timeline */}
              <div />

              {/* LEFT COLUMN */}
              <motion.div style={{ x: leftShift }}>
                <h3 className="text-2xl font-semibold">
                  {exp.title}
                </h3>
                <p className="text-sm text-white/60 mt-2">
                  {exp.duration}
                </p>
              </motion.div>

              {/* RIGHT COLUMN */}
              <motion.div
                style={{ x: rightShift }}
                className="space-y-4 text-white/80 leading-relaxed text-[15px] p-6 rounded-2xl backdrop-blur-md border border-white/10 bg-white/5 transition duration-300 hover:bg-white/10 hover:border-white/20"
              >
                {exp.points.map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-white/40">•</span>
                    <span>{point}</span>
                  </div>
                ))}
              </motion.div>

            </div>
          ))}

        </div>
      </div>
    </motion.section>
  );
}
