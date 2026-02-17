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
    "blinkStart" | "typing" | "blinkEnd" | "move"
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
  }, [phase, text, onFinish]);

  return (
    <motion.div
      initial={{
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
      }}
      animate={
        phase === "move"
          ? { top: 32, left: "50%", x: "-50%", y: 0 }
          : { top: "50%", left: "50%", x: "-50%", y: "-50%" }
      }
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed z-50"
    >
      <motion.h1
        animate={{
          fontSize: phase === "move" ? "1.0rem" : "3rem", // 0.875rem = text-sm
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
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
