import { motion } from "framer-motion";
import { Section } from "./Section";

const stats = [
  { value: "50+", label: "Projects Shipped" },
  { value: "3+", label: "Years Building" },
  { value: "20k+", label: "GitHub Stars" },
  { value: "10+", label: "Open Source PRs" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title={
        <>
          Engineer by craft, <span className="text-gradient">researcher by curiosity.</span>
        </>
      }
      description="I focus on building systems that bridge research and real-world products — from training neural networks to shipping interfaces millions can rely on."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed"
        >
          <p>
            My journey started with a curiosity for how machines learn. That curiosity grew into a
            career building <span className="text-foreground">production-grade AI systems</span> —
            computer vision pipelines, NLP services, and the full-stack platforms that surround
            them.
          </p>
          <p>
            I care deeply about <span className="text-foreground">engineering excellence</span>:
            clean architectures, observability, scalable inference, and user experiences that feel
            inevitable. I've collaborated with research labs, startups, and open-source maintainers
            across continents.
          </p>
          <p>
            When I'm not shipping code, I'm publishing technical writing, contributing to OSS, or
            exploring the next thing on the frontier — agents, multimodal models, edge inference.
          </p>
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:glow-blue transition-all hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground font-mono">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
