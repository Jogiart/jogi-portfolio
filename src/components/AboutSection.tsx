import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 reveal-item">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12 reveal-item" />
        <div className="bg-card rounded-2xl p-8 border border-border card-hover reveal-item">
          <p className="text-secondary-foreground leading-relaxed text-lg">
            Computer Science undergraduate at <span className="text-foreground font-medium">Vel Tech University, Chennai</span> with
            a CGPA of 8.4/10. I have strong expertise in Python, web development, and SQL, with hands-on
            experience in machine learning and IoT-based systems. I've developed scalable projects including
            AI-powered monitoring solutions and web applications, and completed international industrial training
            at <span className="text-foreground font-medium">Universiti Malaysia Perlis</span>.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              { label: "CGPA", value: "8.4/10" },
              { label: "Projects", value: "3+" },
              { label: "Internships", value: "3" },
              { label: "Certifications", value: "2" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-gradient font-heading">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
