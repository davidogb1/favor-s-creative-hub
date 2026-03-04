import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const categories = ["All", "Web Design", "UI/UX", "Development"];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Design",
    image: project1,
    desc: "A modern online store with responsive grid layout, smooth animations, and optimized performance.",
    tags: ["HTML5", "CSS Grid", "JavaScript"],
  },
  {
    title: "Learning Portal",
    category: "UI/UX",
    image: project2,
    desc: "An interactive education platform featuring accessible design and engaging user experience.",
    tags: ["React", "Flexbox", "Responsive"],
  },
  {
    title: "Mobile App Design",
    category: "UI/UX",
    image: project3,
    desc: "Cross-platform mobile interface with fluid animations and intuitive navigation patterns.",
    tags: ["Figma", "Prototyping", "Animation"],
  },
  {
    title: "Analytics Dashboard",
    category: "Development",
    image: project4,
    desc: "Data visualization dashboard with real-time updates and responsive chart components.",
    tags: ["TypeScript", "CSS Grid", "Charts"],
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <section className="py-24">
        <div className="section-container">
          <ScrollReveal>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4">Portfolio</p>
            <h1 className="heading-lg mb-6">Selected Works</h1>
            <p className="text-body max-w-xl mb-12">
              A curated collection of projects showcasing my skills in web design, 
              responsive development, and interactive experiences.
            </p>
          </ScrollReveal>

          {/* Filter */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full font-display text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group rounded-2xl overflow-hidden bg-card border border-border card-hover"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                      <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors mt-1" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-display font-medium rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
