import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="w-36 h-36 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/50 glow animate-fade-in-up shadow-2xl ring-4 ring-background/80">
          <img src={profilePhoto} alt="R Jogendra Sai Ramanjaneyulu" className="w-full h-full object-cover brightness-110 contrast-105" />
        </div>
        <p className="text-primary font-heading font-medium tracking-wider uppercase text-sm mb-4 animate-fade-in-up">
          Computer Science Engineer
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          R Jogendra Sai<br />
          <span className="text-gradient">Ramanjaneyulu</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Python · Web Development · Machine Learning · IoT Systems
        </p>
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a href="https://github.com/jogiart" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/jogendrasai99989" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all">
            <Linkedin size={20} />
          </a>
          <a href="mailto:jogendrasai33@gmail.com" className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all">
            <Mail size={20} />
          </a>
        </div>
        <a
          href="/Jogendra_Sai_Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Download size={18} />
          Download Resume
        </a>
        <div className="block">
          <a href="#about" className="inline-block animate-float">
            <ArrowDown size={24} className="text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
