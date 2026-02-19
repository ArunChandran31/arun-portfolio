"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

type Experience = {
  title: string;
  duration: string;
  points: string[];
};

type ExperienceItemProps = {
  exp: Experience;
  index: number;
  total: number;
  smoothProgress: MotionValue<number>;
  leftShift: MotionValue<string>;
  rightShift: MotionValue<string>;
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );

  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [12, 0, 0, 12]
  );

  const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

  const leftShift = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    ["-25%", "0%", "0%", "-25%"]
  );

  const rightShift = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    ["25%", "0%", "0%", "25%"]
  );

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
  });

  const experiences: Experience[] = [
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

  return (
    <motion.section
      ref={ref}
      id="experience"
      style={{ opacity: sectionOpacity, filter: blur }}
      className="relative min-h-screen px-6 md:px-12 lg:px-24 py-24 text-white scroll-mt-28"
    >
      <h2 className="text-5xl md:text-6xl font-bold mb-20">
        experiences.
      </h2>

      <div className="space-y-24">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            exp={exp}
            index={index}
            total={experiences.length}
            smoothProgress={smoothProgress}
            leftShift={leftShift}
            rightShift={rightShift}
          />
        ))}
      </div>
    </motion.section>
  );
}

function ExperienceItem({
  exp,
  index,
  total,
  smoothProgress,
  leftShift,
  rightShift,
}: ExperienceItemProps) {
  const activationStart = index / total;
  const activationEnd = (index + 1) / total;

  const glowScale = useTransform(
    smoothProgress,
    [
      activationStart,
      activationStart + 0.05,
      activationEnd - 0.05,
      activationEnd,
    ],
    [0.8, 1.2, 1.2, 0.8]
  );

  const glowOpacity = useTransform(
    smoothProgress,
    [
      activationStart,
      activationStart + 0.05,
      activationEnd - 0.05,
      activationEnd,
    ],
    [0.3, 1, 1, 0.3]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-[40px_1fr_2fr] gap-6 items-center">
      {/* DOT */}
      <div className="flex justify-center md:justify-start">
        <motion.div
          style={{ scale: glowScale, opacity: glowOpacity }}
          className="w-4 h-4 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.9)]"
        />
      </div>

      <motion.div style={{ x: leftShift }}>
        <h3 className="text-xl md:text-2xl font-semibold">{exp.title}</h3>
        <p className="text-sm text-white/60 mt-2">{exp.duration}</p>
      </motion.div>

      <motion.div
        style={{ x: rightShift }}
        className="space-y-4 text-white/80 text-sm md:text-[15px] p-5 md:p-6 rounded-2xl backdrop-blur-md border border-white/10 bg-white/5"
      >
        {exp.points.map((point, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-white/40">•</span>
            <span>{point}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
