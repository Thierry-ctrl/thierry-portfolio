import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-black/40">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-primary" />
          <span className="font-serif font-bold text-lg text-white">
            TR<span className="text-primary">.</span>SYS
          </span>
        </div>
        
        <div className="text-sm font-mono text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} Thierry Rugira. Designed & Engineered for Impact.
        </div>
        
        <a href="https://github.com/Thierry-ctrl" target="_blank" rel="noopener noreferrer" className="text-primary font-mono text-xs uppercase tracking-widest hover:text-white transition-colors">
          github.com/Thierry-ctrl
        </a>
      </div>
    </footer>
  );
}
