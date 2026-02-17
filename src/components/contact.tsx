"use client";

import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);

  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [12, 0, 0, 12]
  );
  const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <motion.section
      ref={ref}
      id="contact"
      style={{ opacity, y, scale, filter: blur }}
      className="min-h-[50vh] px-24 py-32 text-white"
    >
      <h2 className="text-6xl font-bold mb-24 tracking-tight">
        contact.
      </h2>

      <div className="grid grid-cols-2 gap-16">

        {/* LEFT CARD — HIRING */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="
            p-12
            rounded-3xl
            backdrop-blur-md
            bg-white/5
            border border-white/10
            hover:bg-white/10
            hover:border-white/20
            transition duration-300
          "
        >
          <h3 className="text-2xl font-semibold mb-4">
            Work With Me
          </h3>

          <p className="text-white/70 text-[15px] leading-relaxed mb-8">
            Open to software engineering roles where I can contribute,
            build scalable systems, and grow alongside strong technical teams.
            Let’s connect.
          </p>

          <div className="space-y-4 text-sm">
            <a
              href="mailto:arunchandran2k4@gmail.com"
              className="block opacity-80 hover:opacity-100 transition"
            >
              arunchandran2k4@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/arunkumarc31/"
              target="_blank"
              className="block opacity-80 hover:opacity-100 transition"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://drive.google.com/file/d/1SZyKkkrdya_Rn-7OfR23h7ONIIotOwDN/view?usp=sharing"
              target="_blank"
              className="block opacity-80 hover:opacity-100 transition"
            >
              Download Resume ↗
            </a>
          </div>
        </motion.div>


        {/* RIGHT CARD — CREVIRO */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="
            p-12
            rounded-3xl
            backdrop-blur-md
            bg-white/5
            border border-white/10
            hover:bg-white/10
            hover:border-white/20
            transition duration-300
          "
        >
          <h3 className="text-2xl font-semibold mb-4">
            Build With Creviro.io
          </h3>

          <p className="text-white/70 text-[15px] leading-relaxed mb-8">
            Need modern web solutions, scalable applications, or
            AI-driven systems? Let’s collaborate and turn your ideas
            into high-performance digital products.
          </p>

          <div className="space-y-4 text-sm">
            <a
              href="mailto:arunchandran2k4@gmail.com"
              className="block opacity-80 hover:opacity-100 transition"
            >
              arunchandran2k4@gmail.com
            </a>

            <a
              href="https://www.instagram.com/creviro.io/"
              target="_blank"
              className="block opacity-80 hover:opacity-100 transition"
            >
              Visit Instagram ↗
            </a>

            <a
              href="https://www.instagram.com/creviro.io/"
              target="_blank"
              className="block opacity-80 hover:opacity-100 transition"
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.div>

      </div>

      
    </motion.section>
  );
}
