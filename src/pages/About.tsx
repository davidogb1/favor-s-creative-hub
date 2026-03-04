import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import aboutPhoto from "@/assets/about-photo.jpg";
import { Code2, Figma, Globe, Layers, Monitor, Paintbrush } from "lucide-react";

const techSkills = [
  { icon: <Code2 size={22} />, name: "HTML5 & CSS3" },
  { icon: <Paintbrush size={22} />, name: "JavaScript / TypeScript" },
  { icon: <Layers size={22} />, name: "React & Frameworks" },
  { icon: <Monitor size={22} />, name: "Responsive Design" },
  { icon: <Figma size={22} />, name: "UI/UX Design" },
  { icon: <Globe size={22} />, name: "Web Performance" },
];

const About = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="section-container">
          <ScrollReveal>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4">About Me</p>
            <h1 className="heading-lg mb-16">The Story Behind the Code</h1>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal delay={0.1}>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src={aboutPhoto} alt="Favor" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="heading-md mb-6">Passionate About Pixels & Purpose</h2>
                <div className="space-y-4 text-body">
                  <p>
                    I'm Favor, a web designer and developer with a deep passion for creating 
                    digital experiences that are not only visually captivating but also functionally 
                    robust and accessible to everyone.
                  </p>
                  <p>
                    With expertise in HTML5 semantic markup, CSS Flexbox & Grid, and modern 
                    JavaScript frameworks, I build responsive websites that perform beautifully 
                    across all devices and screen sizes.
                  </p>
                  <p>
                    I believe great web design is where creativity meets clean code — every project 
                    I take on reflects a commitment to organized, maintainable, and scalable solutions.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-24 bg-card">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="heading-lg mb-4">Skills & Technologies</h2>
            <p className="text-body max-w-xl mb-12">
              The tools and technologies I use to bring ideas to life.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techSkills.map((skill, i) => (
              <ScrollReveal key={skill.name} delay={i * 0.08}>
                <div className="flex items-center gap-4 p-6 rounded-xl bg-background border border-border card-hover">
                  <div className="text-primary">{skill.icon}</div>
                  <span className="font-display font-medium">{skill.name}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24">
        <div className="section-container max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-lg mb-12">Experience</h2>
          </ScrollReveal>
          {[
            { year: "2024 – Present", role: "Freelance Web Designer", desc: "Crafting custom websites for clients across various industries." },
            { year: "2023 – 2024", role: "Junior Frontend Developer", desc: "Built responsive interfaces and interactive UI components." },
            { year: "2022 – 2023", role: "Web Design Intern", desc: "Learned the foundations of semantic HTML, CSS architecture, and design systems." },
          ].map((exp, i) => (
            <ScrollReveal key={exp.year} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-8 border-b border-border">
                <span className="font-display text-sm text-primary font-medium w-40 shrink-0">{exp.year}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1">{exp.role}</h3>
                  <p className="text-muted-foreground">{exp.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
