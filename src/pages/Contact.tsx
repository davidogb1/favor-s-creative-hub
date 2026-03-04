import { useState, FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-24">
        <div className="section-container">
          <ScrollReveal>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4">Contact</p>
            <h1 className="heading-lg mb-6">Let's Connect</h1>
            <p className="text-body max-w-xl mb-16">
              Have a project in mind or just want to say hello? Drop me a message and I'll get back to you as soon as possible.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-8">
                {[
                  { icon: <Mail size={22} />, label: "Email", value: "favor@example.com" },
                  { icon: <Phone size={22} />, label: "Phone", value: "+234 800 000 0000" },
                  { icon: <MapPin size={22} />, label: "Location", value: "Lagos, Nigeria" },
                ].map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-display text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="font-display font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={0.2} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-display text-sm font-medium mb-2">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-display text-sm font-medium mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block font-display text-sm font-medium mb-2">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-display text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
