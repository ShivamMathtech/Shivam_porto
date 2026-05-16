import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="relative py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            {eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
