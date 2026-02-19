"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  return (
    <header
      className="
        fixed top-0 left-0 w-full
        z-50
        backdrop-blur-md
        bg-black/40
        border-b border-white/5
      "
    >
      <nav className="flex justify-between items-center px-24 py-6 text-white">

        {/* LEFT */}
        <div className="flex gap-10 md:gap-8 lg:gap-10 text-sm font-light">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
        </div>

        {/* CENTER */}
        <div className="text-sm font-light tracking-wide">
          arun chandran.
        </div>

        {/* RIGHT */}
        <div className="flex gap-10 md:gap-8 lg:gap-10 text-sm font-light">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <NavLink href="#socials">Socials</NavLink>
        </div>

      </nav>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(href);
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const inView =
        rect.top <= window.innerHeight * 0.4 &&
        rect.bottom >= window.innerHeight * 0.4;

      setActive(inView);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [href]);

  return (
    <a
      href={href}
      className={`
        relative group transition-all duration-300
        hover:-translate-y-1
        hover:scale-105
        ${active ? "-translate-y-1 scale-105" : ""}
      `}
    >
      <span
        className={`
          transition duration-300
          ${active ? "text-white" : "text-white/70 group-hover:text-white"}
        `}
      >
        {children}
      </span>

      {/* Animated underline */}
      <span
        className="
          absolute left-0 -bottom-1
          h-[1px] w-0
          bg-white
          transition-all duration-300 ease-out
          group-hover:w-full
        "
      />

      {/* Glow when active */}
      {active && (
        <span
          className="
            absolute inset-0
            -z-10
            blur-lg
            bg-white/10
            rounded-md
            animate-pulse
          "
        />
      )}
    </a>
  );
}
