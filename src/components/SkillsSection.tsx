import { Code, Globe, Database, Wrench } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillGroups = [
  { icon: <Code size={20} />, title: "Programming", skills: ["Python", "C (Basic)"] },
  { icon: <Globe size={20} />, title: "Web", skills: ["HTML", "CSS", "JavaScript"] },
  { icon: <Database size={20} />, title: "Databases", skills: ["SQL"] },
  { icon: <Wrench size={20} />, title: "Tools & Libraries", skills: ["Git", "NumPy", "Pandas", "Matplotlib", "TensorFlow"] },
];

const SkillsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 bg-card/50" ref={ref}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 reveal-item">
          <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12 reveal-item" />
        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((g, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 border border-border card-hover reveal-item">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">{g.icon}</div>
                <h3 className="font-heading font-bold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
