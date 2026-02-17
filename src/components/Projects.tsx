"use client";

import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";
import { useRef } from "react";

export default function Projects() {
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
      id="projects"
      style={{ opacity, y, scale, filter: blur }}
      className="min-h-screen px-24 py-32 text-white"
    >
      <h2 className="text-6xl font-bold mb-24 tracking-tight">
        projects.
      </h2>

      <div className="space-y-20">

        <ProjectCard
          title="Smart Search Engine with Autocomplete & Ranking"
          tech="Java, Spring Boot, React.js, TailwindCSS, REST APIs"
          link="https://github.com/ArunChandran31/custom-search-engine"
          points={[
            "Built a high-performance search engine using Inverted Indexing and Trie-based prefix matching for real-time autocomplete.",
            "Applied advanced data structures and ranking algorithms to improve search relevance, retrieval speed, and scalability.",
            "Developed a responsive React interface with debounced search, smooth transitions, and optimized API request handling."
          ]}
        />

        <ProjectCard
          title="Code Vivarippu AI (AI Code Reviewer)"
          tech="Java, FastAPI, Vue.js, TailwindCSS, MongoDB, LLMs"
          link="https://github.com/ArunChandran31/code-vivarippu-ai"
          points={[
            "Designed an AI-powered static code analysis platform providing real-time error detection and intelligent review insights.",
            "Integrated OpenAI, Claude, and LLaMA models to generate contextual, developer-friendly code suggestions.",
            "Reduced manual review effort by 40% while improving issue detection accuracy and overall developer productivity."
          ]}
        />

        <ProjectCard
          title="Agile-Driven Cloud-Native Microservices Platform"
          tech="Docker, Kubernetes, OpenShift, Serverless, GitHub Actions"
          link="https://github.com/ArunChandran31/devops-capstone-project"
          points={[
            "Architected containerized microservices deployed on Kubernetes with scalable orchestration and efficient resource utilization.",
            "Implemented automated CI/CD pipelines for testing, linting, and deployment using GitHub Actions workflows.",
            "Improved release frequency by 40%, enhanced system reliability by 30%, and reduced deployment failures significantly."
          ]}
        />

        <ProjectCard
          title="Innovative Monitoring System for Tele-ICU Patients"
          tech="OpenCV, IoT Sensors, Flask, SQLite, Twilio"
          link="https://github.com/ArunChandran31/KaleidoSparkJets-Intel"
          points={[
            "Developed a real-time Tele-ICU monitoring pipeline using OpenCV, IoT sensors, and Flask APIs.",
            "Achieved 95% activity detection accuracy while reducing manual patient observation time by 40%.",
            "Integrated Twilio-based emergency alerts and optimized SQLite storage for reliable medical data management."
          ]}
        />

        <ProjectCard
          title="MML-Powered Market Value Analysis & Visualization Platform"
          tech="Python, Streamlit, Pandas, Scikit-Learn"
          link="https://github.com/ArunChandran31/market_value_analysis"
          points={[
            "Automated ETL and exploratory data analysis on structured datasets with over 650 correlated entries.",
            "Trained a high-accuracy Random Forest model achieving R² above 0.90, reducing prediction error significantly.",
            "Built a Streamlit-based BI dashboard delivering real-time insights and improving analysis efficiency by 60%."
          ]}
        />

      </div>
    </motion.section>
  );
}


/* ---------------- PROJECT CARD ---------------- */

function ProjectCard({
  title,
  tech,
  points,
  link,
}: {
  title: string;
  tech: string;
  points: string[];
  link: string;
}) {
  return (
    <motion.div
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
      "
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-sm
            font-light
            tracking-wide
            opacity-70
            hover:opacity-100
            transition
          "
        >
          View Project ↗
        </a>
      </div>

      <p className="text-sm text-white/60 mb-6">
        <span className="font-medium text-white/80">Tech Stack:</span> {tech}
      </p>

      <div className="space-y-3 text-white/80 text-[15px] leading-relaxed">
        {points.map((point, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-white/40">•</span>
            <span>{point}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
