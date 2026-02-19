"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { IconType } from "react-icons";
import {
  FaJava,
  FaPython,
  FaReact,
  FaDocker,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiSpringboot,
  SiKubernetes,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiRedis,
  SiFastapi,
  SiCplusplus,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: IconType;
};

const skills: Skill[] = [
  { name: "Java", icon: FaJava },
  { name: "Python", icon: FaPython },
  { name: "C++", icon: SiCplusplus },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "SpringBoot", icon: SiSpringboot },
  { name: "FastAPI", icon: SiFastapi },

  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Redis", icon: SiRedis },
  { name: "Docker", icon: FaDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "AWS", icon: FaAws },
  { name: "Git", icon: FaGitAlt },
  { name: "Linux", icon: FaLinux },
  { name: "Tailwind", icon: SiTailwindcss },
];

export default function Skills() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"], // animate only near entry & exit
  });

  /* Horizontal movement */
  const x = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    ["20%", "0%", "0%", "-20%"]
  );

  /* Scale (same style as about) */
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.92, 1, 0.92]
  );

  /* Fade */
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );

  /* Blur only on entry & exit */
  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [12, 0, 0, 14]
  );

  const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <motion.section
      ref={ref}
      id="skills"
      style={{
        x,
        scale,
        opacity,
        filter: blur,
      }}
      className="min-h-screen px-24 py-24 text-white scroll-mt-28"
    >
      {/* Title same alignment as other sections */}
      <h2 className="text-6xl font-bold mb-24 tracking-tight">
        skills.
      </h2>

      {/* Centered Board */}
      <div className="flex justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <SkillTile key={i} skill={skill} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* ---------------- TILE ---------------- */

function SkillTile({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="
        group
        relative
        w-24
        h-24
        rounded-xl
        backdrop-blur-sm
        bg-white/5
        border border-white/10
        transition-all
        duration-200
        hover:bg-white
        hover:border-white
      "
    >
      {/* Centered Icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        <Icon
          size={30}
          className="
            text-white
            transition-colors
            duration-200
            group-hover:text-black
          "
        />
      </motion.div>

      {/* Skill Name */}
      <span
        className="
          absolute
          bottom-3
          left-1/2
          -translate-x-1/2
          text-[10px]
          tracking-wide
          opacity-0
          translate-y-2
          transition-all
          duration-200
          group-hover:opacity-100
          group-hover:translate-y-0
          text-black
        "
      >
        {skill.name}
      </span>
    </motion.div>
  );
}
