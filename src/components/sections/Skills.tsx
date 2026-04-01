import { motion } from "framer-motion";
import { Terminal, Database, Shield, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: Terminal,
    skills: ["HTML5", "CSS3 / Tailwind", "JavaScript (ES6+)", "React.js", "Framer Motion"]
  },
  {
    title: "Backend & Systems",
    icon: Server,
    skills: ["Node.js", "REST APIs", "Server-side Logic", "Authentication Concepts", "System Design Fundamentals"]
  },
  {
    title: "Data & Engineering",
    icon: Database,
    skills: ["Python", "SQL", "Data Pipelines", "Data Cleaning & Transformation", "Real-world Datasets", "API Data Integration"]
  },
  {
    title: "DevOps & Tools",
    icon: Shield,
    skills: ["Git Version Control", "GitHub", "Vite", "Responsive UI/UX", "Agile Methodologies"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-[1px] flex-1 bg-white/10" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-right">
            04. <span className="text-primary">Tech Stack:</span> Arsenal
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-white/10 bg-black/40 rounded-xl p-8 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-8">
                <category.icon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-serif font-bold text-white">{category.title}</h3>
              </div>
              
              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    <span className="text-muted-foreground font-mono text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
