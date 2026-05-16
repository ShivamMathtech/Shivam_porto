import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  category: string;
  tech: string[];
  stars: number;
  forks: number;
  repo: string;
  demo?: string;
  accent: string;
}

const projects: Project[] = [
  {
    title: "Neural Vision Studio",
    description:
      "Real-time computer vision pipeline with custom YOLO variants and edge deployment.",
    category: "Computer Vision",
    tech: ["PyTorch", "ONNX", "FastAPI", "React"],
    stars: 1240,
    forks: 187,
    repo: "#",
    demo: "#",
    accent: "from-blue-500/30 to-purple-500/30",
  },
  {
    title: "LangAgent Framework",
    description:
      "Production framework for building, evaluating and deploying autonomous LLM agents.",
    category: "AI/ML",
    tech: ["Python", "LangChain", "OpenAI", "Redis"],
    stars: 3400,
    forks: 421,
    repo: "#",
    demo: "#",
    accent: "from-purple-500/30 to-pink-500/30",
  },
  {
    title: "DroneSim 3D",
    description:
      "Photorealistic drone simulator for training RL agents — built on Three.js & WASM.",
    category: "Drone Simulation",
    tech: ["Three.js", "Rust", "WASM", "TypeScript"],
    stars: 890,
    forks: 102,
    repo: "#",
    demo: "#",
    accent: "from-cyan-500/30 to-blue-500/30",
  },
  {
    title: "OCR Engine X",
    description: "End-to-end OCR system for low-resource scripts achieving SOTA on benchmark sets.",
    category: "OCR",
    tech: ["PyTorch", "Transformers", "CUDA"],
    stars: 720,
    forks: 96,
    repo: "#",
    demo: "#",
    accent: "from-emerald-500/30 to-cyan-500/30",
  },
  {
    title: "SecScan",
    description:
      "Autonomous security scanner for cloud-native workloads with explainable findings.",
    category: "Cybersecurity",
    tech: ["Go", "eBPF", "PostgreSQL"],
    stars: 540,
    forks: 71,
    repo: "#",
    demo: "#",
    accent: "from-rose-500/30 to-orange-500/30",
  },
  {
    title: "Open NLP Toolkit",
    description: "Modular NLP toolkit for multilingual tokenization, NER and summarization.",
    category: "NLP",
    tech: ["Python", "HuggingFace", "FastAPI"],
    stars: 2100,
    forks: 312,
    repo: "#",
    demo: "#",
    accent: "from-indigo-500/30 to-purple-500/30",
  },
];

const filters = [
  "All",
  "AI/ML",
  "Computer Vision",
  "NLP",
  "OCR",
  "Cybersecurity",
  "Drone Simulation",
];

export function Projects() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Section
      id="projects"
      eyebrow="03 — Projects"
      title={
        <>
          Things I've <span className="text-gradient">designed & shipped.</span>
        </>
      }
      description="A selection of products, research artifacts, and open-source work."
    >
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
              active === f
                ? "bg-primary text-primary-foreground glow"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {shown.map((p, i) => (
          <motion.article
            key={p.title}
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            className="group relative glass rounded-2xl p-6 overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1"
          >
            <div
              className={`absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-50 group-hover:opacity-80 transition-opacity`}
            />
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">
                    {p.category}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                </div>
                <div className="flex gap-3 text-xs text-muted-foreground font-mono">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {p.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" />
                    {p.forks}
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-white/5 border border-white/5 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium glass hover:bg-white/10 transition-colors"
                >
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
