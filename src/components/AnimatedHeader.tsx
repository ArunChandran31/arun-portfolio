"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedHeader({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const text = "arun chandran.";
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<
    "blinkStart" | "typing" | "blinkEnd" | "move" | "fade"
  >("blinkStart");

  useEffect(() => {
    if (phase === "blinkStart") {
      const timer = setTimeout(() => setPhase("typing"), 2000);
      return () => clearTimeout(timer);
    }

    if (phase === "typing") {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(interval);
          setPhase("blinkEnd");
        }
      }, 90);

      return () => clearInterval(interval);
    }

    if (phase === "blinkEnd") {
      const timer = setTimeout(() => {
        setPhase("move");
        setTimeout(onFinish, 1000);
      }, 2000);

      return () => clearTimeout(timer);
    }

    /* ⭐ Fade after move */
    if (phase === "move") {
      const timer = setTimeout(() => {
        setPhase("fade");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [phase, text, onFinish]);

  return (
    <motion.div
      initial={{
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
        opacity: 1,
      }}
      animate={
        phase === "move"
          ? { top: 40, left: "50%", x: "-50%", y: 0, opacity: 1 }
          : phase === "fade"
          ? { top: 40, left: "50%", x: "-50%", y: 0, opacity: 0 } // ⭐ lock position while fading
          : { top: "50%", left: "50%", x: "-50%", y: "-50%", opacity: 1 }
      }
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed z-50"
    >
      <motion.h1
        animate={{
          fontSize:
            phase === "move" || phase === "fade"
              ? "0.875rem" // ⭐ text-sm
              : "3rem",
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="font-light tracking-wide flex items-center"
      >
        {displayed}

        {(phase === "blinkStart" ||
          phase === "typing" ||
          phase === "blinkEnd") && (
          <span className="ml-2 cursor text-[3rem]">|</span>
        )}
      </motion.h1>
    </motion.div>
  );
}
