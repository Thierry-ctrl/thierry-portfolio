import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage("Message transmitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Connection failed. Please try again later.");
    }

    setTimeout(() => {
      setStatus("idle");
      setStatusMessage("");
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            05. <span className="text-primary">Comm Link:</span> Contact
          </h2>
          <div className="h-[1px] flex-1 bg-white/10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Establish Connection</h3>
            <p className="text-muted-foreground mb-10 text-lg">
              Whether you have a project in mind, need a scalable solution, or just want to discuss tech and data engineering, my terminal is always open.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "thierry.ru34@gmail.com", href: "mailto:thierry.ru34@gmail.com" },
                { icon: Phone, label: "Phone", value: "0791 541 444", href: "tel:+250791541444" },
                { icon: MessageSquare, label: "WhatsApp", value: "Direct Message", href: "https://wa.me/250791541444" },
                { icon: Github, label: "GitHub", value: "github.com/Thierry-ctrl", href: "https://github.com/Thierry-ctrl" },
                { icon: Linkedin, label: "LinkedIn", value: "in/thierry-rugira", href: "https://www.linkedin.com/in/thierry-rugira-644146264/" }
              ].map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 glass-panel rounded-lg hover:border-primary/50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                    <contact.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-mono text-muted-foreground">{contact.label}</div>
                    <div className="text-white font-medium">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-mono text-primary uppercase tracking-wider">Identification</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-black/50 border border-white/10 rounded-md p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-mono text-primary uppercase tracking-wider">Return Address</label>
                <input
                  type="email"
                  placeholder="your.email@domain.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-black/50 border border-white/10 rounded-md p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-mono text-primary uppercase tracking-wider">Encrypted Message</label>
                <textarea
                  rows={4}
                  placeholder="Project details or inquiry..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-black/50 border border-white/10 rounded-md p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              {statusMessage && (
                <div className={`p-4 rounded-md font-mono text-sm ${status === "success" ? "bg-green-500/10 border border-green-500/30 text-green-400" : "bg-red-500/10 border border-red-500/30 text-red-400"}`}>
                  {statusMessage}
                </div>
              )}

              <Button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-6 bg-primary hover:bg-primary/90 text-black font-serif font-bold text-lg rounded-md group disabled:opacity-50"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                {status === "sending" ? "Transmitting..." : "Transmit Protocol"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
