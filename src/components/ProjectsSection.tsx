import { Leaf, Droplets, BookOpen } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    icon: <Leaf size={24} />,
    title: "Plant Disease Detection",
    tag: "Machine Learning",
    description: "CNN-based system for early and accurate plant disease detection using TensorFlow/Keras with high accuracy classification and real-time analysis.",
    tech: ["Python", "TensorFlow", "Keras", "CNN"],
  },
  {
    icon: <Droplets size={24} />,
    title: "IoT Water Quality Monitoring",
    tag: "IoT + AI",
    description: "End-to-end IoT + AI system using ESP32 with multi-sensor data, rule-based AI risk scoring, real-time dashboard, and multi-channel alerts.",
    tech: ["ESP32", "Python", "Chart.js", "Google Apps Script"],
  },
  {
    icon: <BookOpen size={24} />,
    title: "Learning Content Assistant",
    tag: "Web App",
    description: "Platform providing video-based explanations for academic topics with query submission system and email-based answers.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 reveal-item">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12 reveal-item" />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 border border-border card-hover group reveal-item">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:glow transition-all">
                {p.icon}
              </div>
              <span className="text-xs font-medium text-accent uppercase tracking-wider">{p.tag}</span>
              <h3 className="font-heading text-lg font-bold mt-2 mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
