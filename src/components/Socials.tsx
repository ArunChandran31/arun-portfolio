"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Socials() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"], // animate only near entry & exit
  });

  /* Vertical movement only at entry & exit */
  const y = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [80, 0, 0, -80]
  );

  /* Scale */
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.96, 1, 0.96]
  );

  /* Fade */
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );

  /* Blur only at entry & exit */
  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [12, 0, 0, 14]
  );

  const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <motion.section
      ref={ref}
      id="socials"
      style={{ opacity, y, scale, filter: blur }}
      className="px-24 py-32 text-white scroll-mt-32"
    >
      <h2 className="text-6xl font-bold mb-10 tracking-tight">
        socials.
      </h2>

      <p className="text-lg text-white/70 mb-20 max-w-2xl">
        Whether you’re a hiring manager, collaborator, or looking to build something impactful — let’s connect.
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        <SocialCard
          title="LinkedIn"
          description="Professional updates, experience, and hiring conversations."
          link="https://www.linkedin.com/in/arunkumarc31/"
        />

        <SocialCard
          title="GitHub"
          description="Explore my code, projects, and technical experiments."
          link="https://github.com/ArunChandran31"
        />

        <SocialCard
          title="Email"
          description="Direct communication for opportunities and collaborations."
          link="mailto:arunchandran2k4@gmail.com"
        />

        <SocialCard
          title="Creviro"
          description="Digital solutions, product design, and startup services."
          link="https://www.instagram.com/creviro.io/"
        />

        <SocialCard
          title="Instagram"
          description="Behind-the-scenes moments, creative experiments, design explorations, and snapshots from my tech journey."
          link="https://www.instagram.com/aruunchandran/"
        />

        <SocialCard
          title="Leetcode"
          description="Structured algorithm practice strengthening problem-solving, time complexity optimization, and interview readiness."
          link="https://leetcode.com/u/eRhwfWnN7y/"
        />

      </div>
    </motion.section>
  );
}

/* ---------------- SOCIAL CARD ---------------- */

function SocialCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
        p-10
        rounded-3xl
        backdrop-blur-md
        bg-white/5
        border border-white/10
        hover:bg-white/10
        hover:border-white/20
        transition duration-300
        block
      "
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-semibold mb-3">
            {title}
          </h3>
          <p className="text-white/70 text-[15px]">
            {description}
          </p>
        </div>

        <span className="text-xl opacity-60">
          ↗
        </span>
      </div>
    </motion.a>
  );
}
