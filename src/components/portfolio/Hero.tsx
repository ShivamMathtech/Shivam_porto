import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Twitter, Sparkles } from "lucide-react";

const titles = [
  "AI Engineer",
  "Full Stack Developer",
  "ML Researcher",
  "Computer Vision Engineer",
  "Open Source Contributor",
];

function TypingTitle() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[i];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((i + 1) % titles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="text-gradient">
      {text}
      <span className="inline-block w-[2px] h-[0.9em] bg-primary ml-1 align-middle animate-pulse-glow" />
    </span>
  );
}

const techStack = ["Python", "TypeScript", "React", "PyTorch", "Next.js", "AWS", "Docker", "TensorFlow"];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* background fx */}
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] animate-pulse-glow" />

      <div className="relative mx-auto max-w-6xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-muted-foreground mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Available for opportunities · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.95]"
        >
          Shivam <span className="text-gradient glow-text">Singh</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight min-h-[1.5em]"
        >
          I'm a <TypingTitle />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          I build intelligent systems at the intersection of machine learning, computer vision,
          and full-stack engineering. Currently shipping production AI products and contributing
          to open source.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium glow hover:scale-[1.02] transition-transform"
          >
            View Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-medium hover:bg-white/10 transition-colors"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 flex items-center gap-4"
        >
          {[
            { Icon: Github, href: "https://github.com" },
            { Icon: Linkedin, href: "https://linkedin.com" },
            { Icon: Twitter, href: "https://twitter.com" },
          ].map(({ Icon, href }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label="social link"
              className="p-2.5 rounded-full glass hover:glow transition-all hover:-translate-y-0.5"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 pt-8 border-t border-border"
        >
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            <Sparkles className="h-3 w-3" /> Tech Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-mono glass text-muted-foreground hover:text-foreground transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
