"use client";

import { useState } from "react";
import VideoBackground from "@/components/VideoBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimatedHeader from "@/components/AnimatedHeader";
import About from "@/components/About";
import Experience from "@/components/Experiences";
import Projects from "@/components/Projects";
import Contact from "@/components/contact";
import Socials from "@/components/Socials";

export default function Home() {
  const [showHero, setShowHero] = useState(false);

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      
      {/* Background Video */}
      <VideoBackground />

      {/* Typing Intro */}
      <AnimatedHeader onFinish={() => setShowHero(true)} />

      {/* After animation */}
      {showHero && (
        <>
          <Navbar />
          <Hero />
          <About/>
          <Experience />
          <Projects /> 
          <Contact />
          <Socials />
        </>
      )}
    </main>
  );
}
