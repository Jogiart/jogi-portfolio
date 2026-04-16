import { Briefcase } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    title: "Intern – Directorate of Training & Licensing",
    company: "DGCA (Directorate General of Civil Aviation)",
    location: "New Delhi, India",
    period: "2026",
    points: [
      "Worked at the Directorate of Training and Licensing under DGCA, New Delhi.",
      "Gained exposure to aviation regulatory processes and licensing workflows.",
      "Assisted in documentation and process support within the training directorate.",
    ],
  },
  {
    title: "Industrial Trainee – Intelligent Computing",
    company: "Universiti Malaysia Perlis (UniMAP)",
    location: "Malaysia",
    period: "Oct 2025 – Feb 2026",
    points: [
      "Selected for international industrial training under CIGC PPRN grant.",
      "Worked in a research-intensive computing environment within the Faculty of Intelligent Computing.",
      "Assisted in Python-based data handling, technical documentation, and academic computing tasks.",
      "Collaborated with faculty and peers in a multicultural, international professional setting.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-24 bg-card/50" ref={ref}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 reveal-item">
          <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12 reveal-item" />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""} gap-8 reveal-item`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center z-10">
                  <Briefcase size={14} className="text-primary" />
                </div>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-primary text-sm font-medium">{exp.period}</span>
                  <h3 className="font-heading text-xl font-bold mt-1">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm">{exp.company} · {exp.location}</p>
                  <ul className={`mt-3 space-y-2 ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-secondary-foreground text-sm leading-relaxed">
                        • {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
