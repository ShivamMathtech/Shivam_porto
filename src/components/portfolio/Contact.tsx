import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="05 — Contact"
      title={
        <>
          Let's build something <span className="text-gradient">remarkable.</span>
        </>
      }
      description="Open to opportunities at world-class teams, research collaborations, and selective freelance."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="lg:col-span-3 glass rounded-2xl p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" placeholder="you@company.com" type="email" />
          </div>
          <Field label="Subject" placeholder="What's this about?" />
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell me about your project, role, or idea..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium glow hover:scale-[1.02] transition-transform"
          >
            Send message
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 space-y-4"
        >
          <a
            href="mailto:drshivam49@gmail.com"
            className="flex items-center gap-4 glass rounded-2xl p-5 hover:glow transition-all hover:-translate-y-0.5"
          >
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Email
              </div>
              <div className="font-medium">drshivam49@gmail.com</div>
            </div>
          </a>
          {[
            {
              Icon: Github,
              label: "GitHub",
              value: "ShivamMathtech",
              href: "#",
            },
            { Icon: Linkedin, label: "LinkedIn", value: "/in/shivam-singh-6b7061269", href: "#" },
            { Icon: Twitter, label: "Twitter", value: "ShivamSing64537", href: "#" },
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-4 glass rounded-2xl p-5 hover:glow transition-all hover:-translate-y-0.5"
            >
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  {label}
                </div>
                <div className="font-medium">{value}</div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
}
