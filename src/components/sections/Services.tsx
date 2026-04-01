import { motion } from "framer-motion";
import { Layout, Smartphone, Code, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Business Websites",
    description: "Professional, high-conversion websites designed to establish authority and attract customers online."
  },
  {
    icon: Smartphone,
    title: "Modern Landing Pages",
    description: "Sleek, focused single-page experiences built to drive specific marketing goals and user actions."
  },
  {
    icon: Code,
    title: "Frontend Engineering",
    description: "Robust, scalable React applications with complex state management and flawless performance."
  },
  {
    icon: TrendingUp,
    title: "Platform Redesign",
    description: "Overhauling legacy interfaces with modern UX principles, elevating brand perception and usability."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Service <span className="text-primary">Modules</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leveraging engineering precision to help businesses grow online, look professional, and build scalable digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-xl hover:border-primary/50 transition-colors group relative"
            >
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors border border-primary/20">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              
              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/50 m-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
