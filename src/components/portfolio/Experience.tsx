import { motion } from "framer-motion";
import { Section } from "./Section";

const items = [
  {
    role: "AI Engineer",
    org: "Stealth Startup",
    period: "2025 — Present",
    points: [
      "Architected multimodal retrieval pipelines serving 1M+ requests/day.",
      "Reduced inference latency 4× via custom CUDA kernels and quantization.",
    ],
  },
  {
    role: "ML Research Intern",
    org: "Research Lab",
    period: "2024",
    points: [
      "Published work on efficient transformers for low-resource OCR.",
      "Collaborated with PhDs on novel attention mechanisms.",
    ],
  },
  {
    role: "Full Stack Engineer",
    org: "Freelance",
    period: "2023 — 2024",
    points: [
      "Shipped 12+ production web apps across fintech and dev tools.",
      "End-to-end ownership: design, infra, observability.",
    ],
  },
  {
    role: "Open Source Contributor",
    org: "Various OSS",
    period: "2022 — Present",
    points: [
      "Contributions to LangChain, HuggingFace, and TanStack projects.",
      "Maintainer of two libraries with combined 5k+ stars.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04 — Experience"
      title={<>Building, researching, <span className="text-gradient">contributing.</span></>}
      description="A condensed timeline of roles, research, and open-source work."
    >
      <div className="relative">
        <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="space-y-12">
          {items.map((it, i) => (
            <motion.div
              key={it.role + it.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
            >
              <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <div className="font-mono text-xs text-primary mb-2">{it.period}</div>
                <h3 className="text-xl font-semibold">{it.role}</h3>
                <div className="text-muted-foreground text-sm mb-3">{it.org}</div>
              </div>
              <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:text-right md:pr-12"}`}>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                  {it.points.map((p) => <li key={p}>— {p}</li>)}
                </ul>
              </div>
              <span className="absolute left-1.5 md:left-1/2 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full bg-primary glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
