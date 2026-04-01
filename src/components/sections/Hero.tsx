import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <Terminal className="text-primary w-5 h-5" />
            <span className="font-mono text-primary tracking-wider uppercase text-sm">
              System Online // User: Thierry Rugira
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
          >
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 glow-text">
              Precision Systems
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed"
          >
            I build high-precision digital tools and scalable data architectures. 
            Currently engineering real-world solutions at <span className="text-white font-medium">SAND Technologies</span> in Kigali, Rwanda. 
            Discipline, adaptation, and impact.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-mono text-sm text-primary/80 mb-10 tracking-wide"
          >
            Powered by coffee, curiosity, and occasionally AI
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-serif font-bold uppercase tracking-wider overflow-hidden rounded-sm"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2">
                View My Work <ArrowRight className="w-4 h-4" />
              </span>
            </a>
            
            <a
              href="#contact"
              className="px-8 py-4 border border-white/20 text-white font-serif font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors duration-300 rounded-sm"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-end gap-2 opacity-50">
        <a href="https://github.com/Thierry-ctrl" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-primary hover:text-white transition-colors">github.com/Thierry-ctrl</a>
        <div className="w-24 h-[1px] bg-primary" />
      </div>
    </section>
  );
}
