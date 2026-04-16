import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 reveal-item">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-8 reveal-item" />
        <p className="text-muted-foreground mb-10 reveal-item">
          I'm currently looking for entry-level Software/IT roles. Feel free to reach out!
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <a href="mailto:jogendrasai33@gmail.com" className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border card-hover reveal-item">
            <Mail size={20} className="text-primary" />
            <span className="text-sm text-secondary-foreground">jogendrasai33@gmail.com</span>
          </a>
          <a href="tel:+919342599989" className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border card-hover reveal-item">
            <Phone size={20} className="text-primary" />
            <span className="text-sm text-secondary-foreground">+91 93425 99989</span>
          </a>
          <a href="https://linkedin.com/in/jogendrasai99989" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border card-hover reveal-item">
            <Linkedin size={20} className="text-primary" />
            <span className="text-sm text-secondary-foreground">LinkedIn Profile</span>
          </a>
          <a href="https://github.com/jogiart" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border card-hover reveal-item">
            <Github size={20} className="text-primary" />
            <span className="text-sm text-secondary-foreground">GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
