export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-muted-foreground">
          © 2026 Shivam Singh — Designed & engineered with care.
        </div>
        <a
          href="#home"
          className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
