import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="py-32 relative overflow-hidden bg-primary/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 border border-primary/30 rounded-full text-primary font-mono text-xs uppercase tracking-widest mb-8"
          >
            Core Directives
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-12 leading-tight"
          >
            "Discipline. Adaptation. <br className="hidden md:block" />
            <span className="text-primary glow-text">Growth under pressure.</span>"
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {[
              { title: "Precision", value: "Code as Craft" },
              { title: "Resilience", value: "Anime Persistence" },
              { title: "Innovation", value: "Iron Man Logic" },
              { title: "Impact", value: "Real-world Solutions" }
            ].map((item, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-lg">
                <div className="text-primary font-serif font-bold mb-2">{item.title}</div>
                <div className="text-xs font-mono text-muted-foreground uppercase">{item.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
