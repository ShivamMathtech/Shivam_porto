import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-6xl px-6 transition-all ${scrolled ? "" : ""}`}>
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 ${scrolled ? "glass" : ""}`}
        >
          <a href="#home" className="font-mono text-sm font-bold tracking-tight">
            <span className="text-gradient">shivam</span>
            <span className="text-muted-foreground">.dev</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center text-xs font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity glow"
          >
            Let's talk
          </a>
        </div>
      </div>
    </motion.header>
  );
}
