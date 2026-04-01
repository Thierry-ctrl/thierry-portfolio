import { motion } from "framer-motion";
import { Cpu, Target, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            01. <span className="text-primary">Protocol:</span> Identity
          </h2>
          <div className="h-[1px] flex-1 bg-white/10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              I am a builder and problem solver. With a solid foundation in software engineering, 
              my focus is on creating <span className="text-white">scalable technology, AI systems, and robust data architectures</span> that address real-world challenges in Africa and beyond.
            </p>
            <p>
              Inspired by the obsessive refinement seen in high-performance engineering (think Iron Man's workshop) 
              and the relentless growth mindset of anime protagonists, I approach code as a craft. It's not just about 
              making it work; it's about making it resilient, elegant, and impactful.
            </p>
            <p>
              Whether I'm analyzing environmental datasets or architecting a modern web application, I bring 
              intense discipline and creativity to the terminal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: Cpu,
                title: "Systems Thinker",
                desc: "Connecting the dots between data, backend logic, and user interfaces.",
              },
              {
                icon: Target,
                title: "Laser Precision",
                desc: "Obsessive attention to detail in architecture and deployment.",
              },
              {
                icon: Zap,
                title: "Rapid Adaptation",
                desc: "Thriving under pressure, learning fast, and shipping faster.",
              },
            ].map((trait, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-lg relative overflow-hidden group hover:border-primary/50 transition-colors"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-serif font-bold group-hover:text-primary transition-colors">
                  0{idx + 1}
                </div>
                <trait.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-white font-serif font-bold text-xl mb-2">
                  {trait.title}
                </h3>
                <p className="text-sm text-muted-foreground">{trait.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
