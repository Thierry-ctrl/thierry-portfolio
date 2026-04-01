import { motion } from "framer-motion";
import { Database, Network } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-[1px] flex-1 bg-white/10" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-right">
            02. <span className="text-primary">Active Deployment:</span> Experience
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-xl relative border-l-4 border-l-primary"
          >
            {/* Decorative HUD */}
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-primary/30" />
              <div className="w-2 h-2 rounded-full bg-primary/30" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                  Data & AI Engineer <span className="text-primary">@ SAND Technologies</span>
                </h3>
                <p className="font-mono text-sm text-muted-foreground mt-2">Kigali, Rwanda • Present</p>
              </div>
              <div className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded font-mono text-sm uppercase tracking-wider inline-flex items-center gap-2 w-max">
                <Network className="w-4 h-4" />
                Status: Active
              </div>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                Currently contributing to data and software systems at SAND Technologies, working across projects 
                in environmental monitoring and healthcare. My work involves handling real-world data, supporting 
                system design, and contributing to solutions that operate at scale, while maintaining strict confidentiality.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Working with real-world datasets across environmental monitoring and healthcare domains.",
                  "Supporting system design and contributing to scalable data infrastructure.",
                  "Collaborating closely with cross-functional technical teams to deliver system-level impact.",
                  "Handling data pipelines, cleaning, and transformation to ensure data quality at scale."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
