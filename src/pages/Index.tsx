import { motion } from "framer-motion";
import { ArrowRight, Code, Palette, Smartphone, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";

const skills = [
  { icon: <Code size={28} />, title: "Clean Code", desc: "Semantic HTML5 & modular CSS architecture" },
  { icon: <Palette size={28} />, title: "Visual Design", desc: "Bold aesthetics with purposeful typography" },
  { icon: <Smartphone size={28} />, title: "Responsive", desc: "Pixel-perfect on every screen size" },
  { icon: <Zap size={28} />, title: "Performance", desc: "Optimized animations & fast load times" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>
        <div className="section-container relative z-10 py-20 max-w-7xl">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <p className="font-display text-sm md:text-base uppercase tracking-[0.3em] text-primary mb-6">
                Web Designer & Developer
              </p>
              <h1 className="heading-xl mb-6">
                Hi, I'm <span className="gradient-text">Favor</span>.
                <br />
                I craft digital
                <br />
                experiences.
              </h1>
              <p className="text-body max-w-lg mb-10">
                Transforming ideas into beautiful, responsive, and interactive websites 
                that leave lasting impressions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  View My Work <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-display font-medium rounded-lg hover:bg-secondary transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="heading-lg mb-4">What I Do</h2>
            <p className="text-body max-w-xl mb-16">
              I specialize in creating web experiences that are both visually stunning and technically sound.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <ScrollReveal key={skill.title} delay={i * 0.1}>
                <div className="p-8 rounded-xl bg-card border border-border card-hover">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5">
                    {skill.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="heading-lg mb-6">Let's Work Together</h2>
            <p className="text-body max-w-lg mx-auto mb-10">
              Have a project in mind? I'd love to hear about it and help bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Start a Conversation <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
