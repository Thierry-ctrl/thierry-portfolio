import { motion } from "framer-motion";
import { ExternalLink, Github, Terminal } from "lucide-react";
import imgAqi from "@/assets/images/project-aqi.png";
import imgRestaurant from "@/assets/images/project-restaurant.png";
import imgPlatform from "@/assets/images/project-platform.png";
import imgPortfolio from "@/assets/images/project-portfolio.png";

const projects = [
  {
    title: "Air Quality Monitoring Systems",
    description: "Deploying sensor networks and building data pipelines to track air quality at scale. Focused on data reliability, field operations, and turning raw environmental readings into actionable insights.",
    tech: ["Python", "Data Engineering", "IoT Systems"],
    image: imgAqi,
    github: "https://github.com/Thierry-ctrl",
    live: ""
  },
  {
    title: "Data Systems in Environmental Monitoring & Healthcare",
    description: "Designing and operating data systems at SAND Technologies across environmental monitoring and healthcare domains. Work spans scalable workflows, system integration, and infrastructure built to handle sensitive data at scale. Details are confidential.",
    tech: ["Data Systems", "System Design", "Scalable Workflows"],
    image: imgPlatform,
    github: "",
    live: ""
  },
  {
    title: "Modern Web Concept for Businesses",
    description: "A responsive, SEO-ready website concept built to help businesses establish a credible online presence. Emphasizes mobile experience, search visibility, clear information architecture, and design that drives trust and conversion.",
    tech: ["Responsive Design", "SEO Foundations", "UI/UX"],
    image: imgRestaurant,
    github: "https://github.com/Thierry-ctrl",
    live: ""
  },
  {
    title: "Portfolio Command Center",
    description: "This website — engineered as a precision-built digital space that reflects both technical depth and creative identity. Every detail is intentional.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: imgPortfolio,
    github: "https://github.com/Thierry-ctrl",
    live: ""
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            03. <span className="text-primary">Constructs:</span> Projects
          </h2>
          <div className="h-[1px] flex-1 bg-white/10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel group rounded-xl overflow-hidden flex flex-col"
            >
              <div className="relative h-64 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-white/50">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><ExternalLink className="w-5 h-5" /></a>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-xs text-primary/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
