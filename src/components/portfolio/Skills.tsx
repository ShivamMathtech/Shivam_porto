import { motion } from "framer-motion";
import { Section } from "./Section";
import { Brain, Code2, Database, Cloud, Wrench, Layers } from "lucide-react";

const categories = [
  {
    icon: Brain,
    title: "AI / ML",
    items: ["PyTorch", "TensorFlow", "Transformers", "LangChain", "OpenCV", "scikit-learn"],
  },
  {
    icon: Code2,
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Three.js"],
  },
  {
    icon: Layers,
    title: "Backend",
    items: ["Node.js", "FastAPI", "Go", "GraphQL", "tRPC", "WebSockets"],
  },
  {
    icon: Database,
    title: "Data",
    items: ["PostgreSQL", "Redis", "Pinecone", "MongoDB", "ClickHouse", "Kafka"],
  },
  {
    icon: Cloud,
    title: "Cloud / DevOps",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "Linux", "Vim", "Figma", "Notion", "Postman"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title={<>A toolkit that spans <span className="text-gradient">research to production.</span></>}
      description="The stack I reach for, organized by where it lives in the system."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative glass rounded-2xl p-6 hover:border-primary/40 transition-all hover:-translate-y-1"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="relative">
              <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary mb-5 group-hover:glow transition-all">
                <cat.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 border border-white/5 text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
