"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function Designs() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.96, 1, 0.96]
  );

  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [12, 0, 0, 14]
  );

  const blur = useTransform(
    blurValue,
    (v) => `blur(${v}px)`
  );

  return (
    <motion.section
      ref={ref}
      id="designs"
      style={{
        opacity,
        scale,
        filter: blur,
      }}
      className="min-h-screen px-6 md:px-12 lg:px-24 py-32 text-white scroll-mt-40"
    >
      {/* Title */}
      <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight">
        designs.
      </h2>

      <p className="text-white/70 text-lg mb-20 max-w-2xl">
        A collection of websites, UI concepts, and interactive prototypes
        showcasing design thinking and user experience.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

        <DesignCard
          title="Portfolio Website"
          type="Live Website"
          image="/designs/portfoliohp.png"
          link="https://arun-portfolio-peach.vercel.app/"
        />

        <DesignCard
          title="Aurevia oddyssey website"
          type="Figma Prototype"
          image="/designs/aureviahp.png"
          link="https://system-mark-67344332.figma.site"
        />

        <DesignCard
          title="Aurevia Oddyssey Web Mockup"
          type="Website Design"
          image="/designs/aurevia web mockup.jpg"
          link="https://www.linkedin.com/feed/update/urn:li:activity:7425221907429650432"
        />

        <DesignCard
          title="Aurevia Oddyssey Mobile Mockup"
          type="Applicaton Design"
          image="/designs/aurevia iphone mockup.jpg"
          link="https://www.linkedin.com/feed/update/urn:li:activity:7425220649112981505"
        />

        <DesignCard
          title="Code விவரிப்பு AI - Code Reviewer"
          type="Application"
          image="/designs/aicodereviwer.png"
          link="https://github.com/ArunChandran31/code-vivarippu-ai"
        />

        <DesignCard
          title="Creviro Website"
          type="Prototype & Design"
          image="/designs/crevirohp.png"
          link="https://drive.google.com/drive/folders/1jh1RQ-Yxgog7EPl0woNvjfPnjM8KaSgP?usp=sharing"
        />

        <DesignCard
          title="Custom Search Engine"
          type="Full Stack Application"
          image="/designs/searchenginehp.jpg"
          link="https://github.com/ArunChandran31/custom-search-engine"
        />

        <DesignCard
          title="Market Value Analysis Dashboard"
          type="Dashboard showcasing market trends and insights for informed decision-making."
          image="/designs/marketvalanalysis.png"
          link="https://github.com/ArunChandran31/market_value_analysis"
        />

      </div>
    </motion.section>
  );
}

/* ---------------- CARD ---------------- */

function DesignCard({
  title,
  type,
  image,
  link,
}: {
  title: string;
  type: string;
  image: string;
  link: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      className="
        group
        rounded-3xl
        overflow-hidden
        backdrop-blur-md
        bg-white/5
        border border-white/10
        hover:bg-white/10
        hover:border-white/20
        transition duration-300
        block
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-[240px]
            object-cover
            transition duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-start justify-between">

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              {title}
            </h3>

            <p className="text-white/60 text-sm">
              {type}
            </p>
          </div>

          <span className="text-xl opacity-60">
            ↗
          </span>

        </div>
      </div>
    </motion.a>
  );
}